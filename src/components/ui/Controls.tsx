import { Play, Pause, RotateCcw, Eye, EyeOff } from 'lucide-react';
import { useSimulationStore } from '../../hooks/useSimulationStore';

export default function Controls() {
  const {
    isPlaying,
    speed,
    showOrbits,
    showLabels,
    showAtmospheres,
    timeScale,
    setPlaying,
    setSpeed,
    setShowOrbits,
    setShowLabels,
    setShowAtmospheres,
    setTimeScale
  } = useSimulationStore();

  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 rounded-lg shadow-lg p-4 space-y-4">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setPlaying(!isPlaying)}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>

        <div className="space-y-1">
          <label className="text-sm text-gray-600">Simulation Speed</label>
          <input
            type="range"
            min="0.1"
            max="10"
            step="0.1"
            value={speed}
            onChange={(e) => setSpeed(parseFloat(e.target.value))}
            className="w-32"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm text-gray-600">Time Scale</label>
          <input
            type="range"
            min="1"
            max="365"
            step="1"
            value={timeScale}
            onChange={(e) => setTimeScale(parseFloat(e.target.value))}
            className="w-32"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setShowOrbits(!showOrbits)}
          className={`px-3 py-1 rounded ${showOrbits ? 'bg-blue-100' : 'bg-gray-100'}`}
        >
          {showOrbits ? <Eye size={16} /> : <EyeOff size={16} />} Orbits
        </button>

        <button
          onClick={() => setShowLabels(!showLabels)}
          className={`px-3 py-1 rounded ${showLabels ? 'bg-blue-100' : 'bg-gray-100'}`}
        >
          {showLabels ? <Eye size={16} /> : <EyeOff size={16} />} Labels
        </button>

        <button
          onClick={() => setShowAtmospheres(!showAtmospheres)}
          className={`px-3 py-1 rounded ${showAtmospheres ? 'bg-blue-100' : 'bg-gray-100'}`}
        >
          {showAtmospheres ? <Eye size={16} /> : <EyeOff size={16} />} Atmospheres
        </button>
      </div>
    </div>
  );
}