import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import CelestialBody from './components/CelestialBody';
import Controls from './components/Controls';
import InfoPanel from './components/InfoPanel';
import { celestialBodies } from './data/solarSystem';
import { CelestialBody as CelestialBodyType } from './types/celestialBody';

function App() {
  const [selectedBody, setSelectedBody] = useState<CelestialBodyType | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);

  return (
    <div className="w-full h-screen relative">
      <Canvas
        camera={{ position: [0, 5000, 5000], fov: 45 }}
        style={{ background: '#000' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.1} />
          <pointLight position={[0, 0, 0]} intensity={1} />
          <Stars radius={10000} depth={50} count={5000} factor={4} />
          
          {Object.values(celestialBodies).map((body) => (
            <CelestialBody
              key={body.name}
              body={body}
              onSelect={() => setSelectedBody(body)}
            />
          ))}
          
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            target={[0, 0, 0]}
          />
        </Suspense>
      </Canvas>

      <Controls
        isPlaying={isPlaying}
        onTogglePlay={() => setIsPlaying(!isPlaying)}
        onReset={() => {
          setIsPlaying(false);
          // Reset camera and positions
        }}
        speed={speed}
        onSpeedChange={setSpeed}
      />

      {selectedBody && (
        <InfoPanel
          body={selectedBody}
          onClose={() => setSelectedBody(null)}
        />
      )}
    </div>
  );
}

export default App;