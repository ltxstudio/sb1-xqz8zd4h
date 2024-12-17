import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { CelestialBody as CelestialBodyType } from '../types/celestialBody';

interface Props {
  body: CelestialBodyType;
  showOrbits?: boolean;
  onSelect?: () => void;
}

export default function CelestialBody({ body, showOrbits = true, onSelect }: Props) {
  const ref = useRef<THREE.Group>(null);
  const orbit = useRef<THREE.Line>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      // Rotate around its own axis
      ref.current.rotation.y += body.rotationSpeed * delta;
      
      // Orbit around the sun
      if (body.distance > 0) {
        const angle = (state.clock.getElapsedTime() / body.orbitalPeriod) * Math.PI * 2;
        ref.current.position.x = Math.cos(angle) * body.distance;
        ref.current.position.z = Math.sin(angle) * body.distance;
      }
    }
  });

  return (
    <group ref={ref}>
      <Sphere args={[body.radius, 32, 32]} onClick={onSelect}>
        <meshStandardMaterial
          map={new THREE.TextureLoader().load(body.texture)}
          emissive={body.color}
          emissiveIntensity={body.name === 'Sun' ? 0.5 : 0}
        />
      </Sphere>
      
      {showOrbits && body.distance > 0 && (
        <line ref={orbit}>
          <bufferGeometry>
            <float32BufferAttribute
              attach="attributes-position"
              count={64}
              array={new Float32Array(
                [...Array(65)].map((_, i) => {
                  const angle = (i / 64) * Math.PI * 2;
                  return [
                    Math.cos(angle) * body.distance,
                    0,
                    Math.sin(angle) * body.distance,
                  ];
                }).flat()
              )}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial attach="material" color="#666" transparent opacity={0.3} />
        </line>
      )}
      
      {body.moons?.map((moon, index) => (
        <CelestialBody
          key={moon.name}
          body={{
            ...moon,
            distance: body.radius + moon.distance,
          }}
          showOrbits={showOrbits}
        />
      ))}
    </group>
  );
}