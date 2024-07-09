// Chart/AddAgent.tsx

import React, { useState } from "react";
import AgentModal from "@/components/Modal/AgentModal";

interface AddAgentProps {
  onCloseModal: () => void;
}

const AddAgent: React.FC<AddAgentProps> = ({ onCloseModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    onCloseModal();
  };

  return (
    <div >
    <div className=" fixed col-span-12 xl:col-span-3  h-screen rounded-2xl bg-white w-[265px] shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="mb-4 justify-center items-center gap-1 sm:flex">
        {/* Add your content for AddAgent here */}
        <div className="overflow-y-auto max-h-[600px] mt-6">
        <button onClick={openModal} className="flex items-center bg-[#70cac1] text-white p-1.5 rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#f1f4f4"
          className="mr-2"
        >
          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
        </svg>
        <span className="mr-12">Add Agent</span>
      </button>
      <AgentModal isOpen={isModalOpen} onClose={closeModal} />
         
        </div>
      </div>
    </div>
  </div>
  );
};

export default AddAgent;
