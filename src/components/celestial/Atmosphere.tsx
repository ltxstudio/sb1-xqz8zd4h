import { useRef } from 'react';
import { Sphere } from '@react-three/drei';
import { Atmosphere as AtmosphereType } from '../../types/celestialBody';

interface Props {
  radius: number;
  atmosphere: AtmosphereType;
}

export default function Atmosphere({ radius, atmosphere }: Props) {
  const ref = useRef();

  return (
    <Sphere args={[radius * 1.05, 32, 32]} ref={ref}>
      <meshPhongMaterial
        color={atmosphere.color}
        transparent
        opacity={atmosphere.density}
        side={2}
      />
    </Sphere>
  );
}