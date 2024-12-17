export interface CelestialBody {
  name: string;
  radius: number;
  distance: number;
  rotationSpeed: number;
  orbitalPeriod: number;
  texture: string;
  moons?: Moon[];
  color?: string;
  tilt: number;
  atmosphere?: Atmosphere;
  rings?: Ring[];
  facts: string[];
  mass: string;
  temperature: {
    min: number;
    max: number;
  };
}

export interface Moon {
  name: string;
  radius: number;
  distance: number;
  orbitalPeriod: number;
  texture: string;
  facts: string[];
}

export interface Atmosphere {
  color: string;
  density: number;
  composition: string[];
}

export interface Ring {
  innerRadius: number;
  outerRadius: number;
  texture: string;
  color: string;
}