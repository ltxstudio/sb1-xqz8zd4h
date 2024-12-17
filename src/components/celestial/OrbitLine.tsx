import { useRef } from 'react';
import * as THREE from 'three';

interface Props {
  distance: number;
}

export default function OrbitLine({ distance }: Props) {
  const ref = useRef<THREE.Line>();

  const points = useMemo(() => {
    const segments = 128;
    const vertices = [];
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      vertices.push(
        Math.cos(angle) * distance,
        0,
        Math.sin(angle) * distance
      );
    }
    return new Float32Array(vertices);
  }, [distance]);

  return (
    <line ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial attach="material" color="#666" transparent opacity={0.3} />
    </line>
  );
}