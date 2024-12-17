import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Text } from '@react-three/drei';
import * as THREE from 'three';
import { CelestialBody as CelestialBodyType } from '../../types/celestialBody';
import { useSimulationStore } from '../../hooks/useSimulationStore';
import Atmosphere from './Atmosphere';
import PlanetRings from './PlanetRings';
import OrbitLine from './OrbitLine';

interface Props {
  body: CelestialBodyType;
  onSelect?: (name: string) => void;
}

export default function CelestialBody({ body, onSelect }: Props) {
  const ref = useRef<THREE.Group>();
  const {
    isPlaying,
    speed,
    showOrbits,
    showLabels,
    showAtmospheres,
    timeScale
  } = useSimulationStore();

  const texture = useMemo(() => new THREE.TextureLoader().load(body.texture), [body.texture]);

  useFrame((state, delta) => {
    if (!ref.current || !isPlaying) return;

    // Rotation around own axis
    ref.current.rotation.y += body.rotationSpeed * delta * speed;

    // Orbital motion
    if (body.distance > 0) {
      const time = state.clock.getElapsedTime() * speed * timeScale;
      const angle = (time / body.orbitalPeriod) * Math.PI * 2;
      ref.current.position.x = Math.cos(angle) * body.distance;
      ref.current.position.z = Math.sin(angle) * body.distance;
    }
  });

  return (
    <group ref={ref}>
      <group rotation={[0, 0, body.tilt * Math.PI / 180]}>
        <Sphere args={[body.radius, 64, 64]} onClick={() => onSelect?.(body.name)}>
          <meshStandardMaterial
            map={texture}
            emissive={body.color}
            emissiveIntensity={body.name === 'Sun' ? 0.5 : 0}
          />
        </Sphere>

        {showAtmospheres && body.atmosphere && (
          <Atmosphere radius={body.radius} atmosphere={body.atmosphere} />
        )}

        {body.rings && <PlanetRings rings={body.rings} />}
      </group>

      {showLabels && (
        <Text
          position={[0, body.radius * 1.5, 0]}
          fontSize={body.radius * 0.5}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {body.name}
        </Text>
      )}

      {showOrbits && body.distance > 0 && (
        <OrbitLine distance={body.distance} />
      )}

      {body.moons?.map((moon, index) => (
        <CelestialBody
          key={moon.name}
          body={{
            ...moon,
            distance: body.radius + moon.distance,
            tilt: 0
          }}
          onSelect={onSelect}
        />
      ))}
    </group>
  );
}