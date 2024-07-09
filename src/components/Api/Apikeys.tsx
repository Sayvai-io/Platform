import React, { useState } from "react";

const ApiKeys: React.FC = () => {
  const [showKey, setShowKey] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = () => {
    setShowKey((prevShowKey) => !prevShowKey);
  };

  const handleCopy = () => {
    // Implement your copy to clipboard logic here
    console.log("Copying API key...");
  };

  const handleMouseEnter = () => {
    setShowPassword(true);
  };

  const handleMouseLeave = () => {
    setShowPassword(false);
  };

  const apiKey = "d40a2eb0-ade6-4427-a41e-761cd04cde2d"; // Replace with your actual API key

  return (
    <div className="z-50 col-span-12 rounded-tl-2xl h-screen rounded-tr-2xl bg-white px-5 pt-2 dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-9">
      <div className="w-full ga p-3 mt-4 sm:gap-5">
        <h1 className="text-3xl text-black font-bold">API Keys</h1>
        <h3 className="mt-4">
          Keep your API key confidential; avoid revealing it in browsers or any
          client-side code. For the safeguarding of your account, Retell AI
          reserves the right to deactivate any API key that is detected to have
          been disclosed in a public setting.
        </h3>
        <h3 className="text-xl font-bold mt-15">Credentials</h3>

        <div className="mt-4 p-2 border rounded-lg flex justify-between items-center" style={{ maxWidth: '400px' }}>
          <span className={showKey ? "" : "password-dot"}>
            {showKey ? apiKey : "•••••••••••••••••"}
          </span>
          <div className="flex space-x-2">
            <button
              onClick={toggleVisibility}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 0 960 960"
                width="20px"
                fill="#666666"
                className="cursor-pointer"
              >
                
              </svg>
              {showPassword && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 0 960 960"
                  width="20px"
                  fill="#666666"
                  className="absolute right-0 bottom-0 m-2 cursor-pointer"
                  onClick={toggleVisibility}
                >
                  <path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm72-144h72v-336h-72v336Zm120 0h72v-336h-72v336Zm-151 75Z" />
                </svg>
              )}
            </button>

            <button onClick={handleCopy}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 0 960 960"
                width="20px"
                fill="#666666"
                className="cursor-pointer"
              >
                <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Zm0-300Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiKeys;
