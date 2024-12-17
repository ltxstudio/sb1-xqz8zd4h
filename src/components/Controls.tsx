import React from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface Props {
  isPlaying: boolean;
  onTogglePlay: () => void;
  onReset: () => void;
  onSpeedChange: (speed: number) => void;
  speed: number;
}

export default function Controls({ isPlaying, onTogglePlay, onReset, onSpeedChange, speed }: Props) {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 rounded-lg shadow-lg p-4 flex items-center gap-4">
      <button
        onClick={onTogglePlay}
        className="p-2 rounded-full hover:bg-gray-100"
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>
      
      <button
        onClick={onReset}
        className="p-2 rounded-full hover:bg-gray-100"
      >
        <RotateCcw size={24} />
      </button>
      
      <input
        type="range"
        min="0.1"
        max="10"
        step="0.1"
        value={speed}
        onChange={(e) => onSpeedChange(parseFloat(e.target.value))}
        className="w-32"
      />
      
      <span className="text-sm text-gray-600">
        Speed: {speed.toFixed(1)}x
      </span>
    </div>
  );
}