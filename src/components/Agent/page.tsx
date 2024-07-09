// Chart/Chart.tsx
"use client";
import React,{ useState } from "react";
import AddAgent from "./AddAgent";

import AgentContent from "./AgentContent";
import NoAgent from "./NoAgent";

const Agent: React.FC = () => {
  const [showAdditionalCharts, setShowAdditionalCharts] = useState(false);
  const handleCloseModal = () => {
    setShowAdditionalCharts(true);
  };

  return (
    <>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-12 gap-1 md:gap-2 2xl:gap-1 bg-[#a1ebe4]">
        {/* Fixed section */}
        <div className="col-span-12 xl:col-span-3 rounded-xl">
          <AddAgent onCloseModal={handleCloseModal} />
        </div>

        {showAdditionalCharts ? (
          <div className="col-span-12 xl:col-span-9">
            <AgentContent />
          </div>
        ) : (
          <div className="col-span-12 xl:col-span-9">
            <NoAgent />
          </div>
        )}
      </div>
    </>
  );
};

export default Agent;












