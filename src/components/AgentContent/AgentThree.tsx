"use client";

import React, { useState } from "react";

const AgentThree: React.FC = () => {
    const [isOptedOut, setIsOptedOut] = useState(false);

    const handleToggle = () => {
      setIsOptedOut(!isOptedOut);
    };
  return (
    <div className="mb-2 rounded-2xl border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-3">
      <h2 className="font-bold">Privacy Settings</h2>
      <p className="text-sm mt-2">
        Explore more in the <a href="#" className="underline text-[#33a299]">privacy documentation</a>.
      </p>
      
      <div className="mt-5 flex items-center justify-between">
        <h6 className="text-sm ">Opt-Out of Personal Sensitive Data</h6>
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            checked={isOptedOut}
            onChange={handleToggle}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-[#cae8b1] rounded-full peer dark:bg-gray-700 peer-checked:bg-[#59d6a0]"></div>
          <div className="absolute left-1 top-1 bg-[#cae8b1] border border-gray-300 rounded-full h-4 w-4 transition-transform peer-checked:translate-x-full dark:border-gray-600"></div>
        </label>
      </div>
    </div>
  );
};

export default AgentThree;
