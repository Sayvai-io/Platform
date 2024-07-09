"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

const AgentTwo: React.FC = () => {
  const [selectedLLM, setSelectedLLM] = useState("GPT 3.5 Turbo");
  const [speakFirst, setSpeakFirst] = useState("User Initiates: AI remains silent until users speak first");

  const handleLLMChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLLM(event.target.value);
  };

  const handleSpeakChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSpeakFirst(event.target.value);
  };

  return (
    <div className="rounded-2xl border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-8">
      <h1 className="text-2xl font-bold">Single-Prompt Agent</h1>
      <p className="text-xs">
        llm url: wss://api.retellai.com/retell-llm-
      </p>
      <p className="text-xs underline">
        new/cf7c38a53b5f0f33984fa2f6b11d31a5
      </p>
      
      <h2 className="text-xl font-bold mt-20">Agent Prompt</h2>
      <input
          type="text"
          placeholder="Control how sensitively AI can be interrupted by human speech"
          className="mt-5 pb-60 p-4 w-full border rounded hover:shadow-md"
      />

      <h2 className="text-xl font-bold mt-10">LLM Option</h2>
      <select
        value={selectedLLM}
        onChange={handleLLMChange}
        className="mt-5 p-4 w-full border rounded hover:shadow-md"
      >
        <option value="GPT 3.5 Turbo">GPT 3.5 Turbo</option>
        <option value="GPT 4.5 Turbo">GPT 4.5 Turbo</option>
        <option value="GPT 4">GPT 4</option>
      </select>

      <h2 className="text-xl font-bold mt-10">Who Speaks First</h2>
      <select
        value={speakFirst}
        onChange={handleSpeakChange}
        className="mt-5 p-4 w-full border rounded hover:shadow-md"
      >
        <option value="User Initiates: AI remains silent until users speak first">User Initiates: AI remains silent until users speak first</option>
        <option value="AI Initiates: AI begins with a dynamic begin message">AI Initiates: AI begins with a dynamic begin message</option>
        <option value="AI Initiates: AI begins with your defined begin message">AI Initiates: AI begins with your defined begin message</option>
      </select>

      <h2 className="text-2xl font-bold mt-10">General Tools-Optional</h2>
      <h6 className="text-xs mt-4">
        Enable your agent with capabilities such as calendar bookings, call termination, or your own custom functions. It can be triggered across all states.

      </h6>

    </div>
  );
};

export default AgentTwo;
