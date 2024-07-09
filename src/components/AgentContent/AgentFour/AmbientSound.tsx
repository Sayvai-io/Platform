// components/AgentContent/AmbientSound.tsx

"use client";

import React from "react";

interface AmbientSoundProps {
  selectedSound: string;
  handleSoundChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const AmbientSound: React.FC<AmbientSoundProps> = ({ selectedSound, handleSoundChange }) => {
  return (
    <div>
      <h6 className="font-bold mt-6">Ambient Sound</h6>
      <select
        value={selectedSound}
        onChange={handleSoundChange}
        className="mt-2 p-2 w-full border rounded"
      >
        <option value="Coffee Shop">Coffee Shop</option>
        <option value="Convention Hall">Convention Hall</option>
        <option value="Summer Outdoor">Summer Outdoor</option>
      </select>
    </div>
  );
};

export default AmbientSound;
