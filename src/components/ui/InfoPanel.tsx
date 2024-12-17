import { X } from 'lucide-react';
import { celestialBodies } from '../../data/solarSystem';
import { useSimulationStore } from '../../hooks/useSimulationStore';

export default function InfoPanel() {
  const { selectedBody, setSelectedBody } = useSimulationStore();
  const body = selectedBody ? celestialBodies[selectedBody] : null;

  if (!body) return null;

  return (
    <div className="absolute top-4 right-4 bg-white/90 rounded-lg shadow-lg p-6 w-96">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-2xl font-bold">{body.name}</h2>
        <button
          onClick={() => setSelectedBody(null)}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <X size={20} />
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">Physical Characteristics</h3>
          <p>Mass: {body.mass}</p>
          <p>Radius: {body.radius * 2} units</p>
          <p>Temperature: {body.temperature.min}°C to {body.temperature.max}°C</p>
          <p>Axial Tilt: {body.tilt}°</p>
        </div>

        {body.atmosphere && (
          <div>
            <h3 className="font-semibold mb-2">Atmosphere</h3>
            <p>Composition: {body.atmosphere.composition.join(', ')}</p>
          </div>
        )}

        <div>
          <h3 className="font-semibold mb-2">Orbital Characteristics</h3>
          <p>Distance from Sun: {body.distance} units</p>
          <p>Orbital Period: {body.orbitalPeriod} Earth days</p>
        </div>

        {body.moons && (
          <div>
            <h3 className="font-semibold mb-2">Moons</h3>
            <p>{body.moons.length} natural satellites</p>
            <ul className="list-disc list-inside">
              {body.moons.map(moon => (
                <li key={moon.name}>{moon.name}</li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h3 className="font-semibold mb-2">Interesting Facts</h3>
          <ul className="list-disc list-inside">
            {body.facts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}