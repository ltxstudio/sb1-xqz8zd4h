import { create } from 'zustand';

interface SimulationState {
  isPlaying: boolean;
  speed: number;
  showOrbits: boolean;
  showLabels: boolean;
  showAtmospheres: boolean;
  selectedBody: string | null;
  timeScale: number;
  setPlaying: (playing: boolean) => void;
  setSpeed: (speed: number) => void;
  setShowOrbits: (show: boolean) => void;
  setShowLabels: (show: boolean) => void;
  setShowAtmospheres: (show: boolean) => void;
  setSelectedBody: (body: string | null) => void;
  setTimeScale: (scale: number) => void;
}

export const useSimulationStore = create<SimulationState>((set) => ({
  isPlaying: true,
  speed: 1,
  showOrbits: true,
  showLabels: true,
  showAtmospheres: true,
  selectedBody: null,
  timeScale: 1,
  setPlaying: (playing) => set({ isPlaying: playing }),
  setSpeed: (speed) => set({ speed }),
  setShowOrbits: (show) => set({ showOrbits: show }),
  setShowLabels: (show) => set({ showLabels: show }),
  setShowAtmospheres: (show) => set({ showAtmospheres: show }),
  setSelectedBody: (body) => set({ selectedBody: body }),
  setTimeScale: (scale) => set({ timeScale: scale })
}));