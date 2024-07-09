"use client";

import React from "react";
import AgentOne from "@/components/AgentContent/Agentone";
import AgentTwo from "@/components/AgentContent/AgentTwo";
import AgentThree from "@/components/AgentContent/AgentThree";
import AgentFour from "@/components/AgentContent/AgentFour/AgentFour";




const AgentContent: React.FC = () => {
return (
  <div className="overflow-y-auto max-h-[500px]">
    <div className="z-10 bg-[#a1ebe4] px-0 pt-0  dark:border-strokedark dark:bg-boxdark sm:px-2 xl:col-span-12">
    <div className="mt-0 grid grid-cols-12 gap-1 md:mt-0 md:gap-3 2xl:mt-1 2xl:gap-1">
    
    
      
        <div className="col-span-3 xl:col-span-12">
          <AgentOne />
        </div>
        <div className="col-span-3 xl:col-span-8">
          <AgentTwo />
        </div>
        <div className="col-span-3 xl:col-span-4">
          <AgentThree />
          <AgentFour />
        </div>
       
        
      
   
      </div>
     </div>
   </div>
  );
};

export default AgentContent;
