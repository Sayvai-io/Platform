import React, { useState } from "react";

const WebHooks: React.FC = () => {
 

  
  return (
    <div className="z-50 col-span-12 rounded-tl-2xl h-screen rounded-tr-2xl bg-white px-5 pt-2 dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-9">
      <div className="w-full gap-3 mt-4 sm:gap-5">
        <h1 className="text-3xl text-black font-bold">Webhook Settings</h1>
        <h2 className="text-md mt-4">
        Configure your webhook URL to receive real-time event notifications.
        </h2>
        <h3 className="text-xl font-bold mt-15">Credentials</h3>

        <h3 className="mt-3">
          Check our <a href="#WebHooks" className="text-blue-500 underline">Documentation</a> for details
        </h3>

        <div className="mt-4 p-4 border rounded-md flex justify-between items-center" style={{ maxWidth: '300px' }}>
          
          
        </div>
      </div>
    </div>
  );
};

export default WebHooks;
