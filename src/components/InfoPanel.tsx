import React from 'react';
import { X } from 'lucide-react';
import { CelestialBody } from '../types/celestialBody';

interface Props {
  body: CelestialBody;
  onClose: () => void;
}

export default function InfoPanel({ body, onClose }: Props) {
  return (
    <div className="absolute top-4 right-4 bg-white/90 rounded-lg shadow-lg p-6 w-80">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-2xl font-bold">{body.name}</h2>
        <button
          onClick={onClose}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <X size={20} />
        </button>
      </div>
      
      <div className="space-y-2">
        <p><strong>Diameter:</strong> {body.radius * 2} units</p>
        <p><strong>Distance from Sun:</strong> {body.distance} units</p>
        <p><strong>Orbital Period:</strong> {body.orbitalPeriod} days</p>
        {body.moons && (
          <p><strong>Moons:</strong> {body.moons.length}</p>
        )}
      </div>
    </div>
  );
}