import { useRef } from 'react';
import { Ring as RingType } from '../../types/celestialBody';
import * as THREE from 'three';

interface Props {
  rings: RingType[];
}

export default function PlanetRings({ rings }: Props) {
  const ref = useRef();

  return (
    <group ref={ref} rotation={[Math.PI / 2, 0, 0]}>
      {rings.map((ring, index) => (
        <mesh key={index}>
          <ringGeometry args={[ring.innerRadius, ring.outerRadius, 64]} />
          <meshStandardMaterial
            map={new THREE.TextureLoader().load(ring.texture)}
            color={ring.color}
            side={THREE.DoubleSide}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}