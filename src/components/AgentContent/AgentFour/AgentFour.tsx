// components/Agent/AgentFour.tsx

"use client";

import React, { useState } from "react";
import AmbientSound from "@/components/AgentContent/AgentFour/AmbientSound";
import AmbientSoundVolume from "@/components/AgentContent/AgentFour/AmbientSoundVolume";
import Responsiveness from "@/components/AgentContent/AgentFour/Responsiveness";
import VoiceSpeed from "@/components/AgentContent/AgentFour/VoiceSpeed";
import VoiceTemperature from "@/components/AgentContent/AgentFour/VoiceTemperature";

const AgentFour: React.FC = () => {
  const [selectedSound, setSelectedSound] = useState("Coffee Shop");
  const [volume, setVolume] = useState(0.05);
  const [keywordInput, setKeywordInput] = useState("");

  const handleSoundChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSound(event.target.value);
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(event.target.value));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeywordInput(event.target.value);
  };

  return (
    <div className="mb-4 rounded-2xl border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-3">
      <h3 className="font-bold">Advanced Setting</h3>
      <p className="text-sm mt-1">
        Explore more in <a href="#" className="underline text-[#33a299]">API reference</a>.
      </p>

      <AmbientSound selectedSound={selectedSound} handleSoundChange={handleSoundChange} />
      <AmbientSoundVolume volume={volume} handleVolumeChange={handleVolumeChange} />
      <Responsiveness volume={volume} handleVolumeChange={handleVolumeChange} />
      <VoiceSpeed volume={volume} handleVolumeChange={handleVolumeChange} />
      <VoiceTemperature volume={volume} handleVolumeChange={handleVolumeChange} />

      <h4 className="font-bold mt-6">Boosted Keywords</h4>
      <h6 className="text-sm mt-0">
        Provide a customized list of keywords to expand our model vocabulary. (ex. Retell, Walmart)
      </h6>
      <input
        type="text"
        value={keywordInput}
        onChange={handleInputChange}
        placeholder="Retell Walmart"
        className="mt-2 p-2 w-full border rounded hover:border-green-500 focus:border-green-500 transition-colors duration-300"
      />

      <h4 className="font-bold mt-6">Fallback Voice IDs</h4>
      <h6 className="text-sm mt-0">
        If the current voice provider fails, switch the TTS to alternative provider voice IDs. (ex. openai-Alloy, deepgram-Angus)
      </h6>
      <input
        type="text"
        value={keywordInput}
        onChange={handleInputChange}
        placeholder="Split With,"
        className="mt-2 p-2 w-full border rounded hover:border-green-500 focus:border-green-500 transition-colors duration-300"
      />
    </div>
  );
};

export default AgentFour;
