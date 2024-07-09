// components/AgentContent/VoiceSpeed.tsx

"use client";

import React from "react";

interface VoiceSpeedProps {
  volume: number;
  handleVolumeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const VoiceSpeed: React.FC<VoiceSpeedProps> = ({ volume, handleVolumeChange }) => {
  return (
    <div>
      <h6 className="text-sm font-bold mt-6">Voice Speed ({volume.toFixed(2)})</h6>
      <div className="mt-2 flex items-center">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-full appearance-none h-1 bg-green-500 rounded outline-none"
        />
      </div>
    </div>
  );
};

export default VoiceSpeed;
