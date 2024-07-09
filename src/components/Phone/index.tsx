// Chart/Chart.tsx
"use client";
import React,{ useState } from "react";



import AddPhoneNumber from "./AddPhoneNumber";
import NoPhoneNumber from "./NoPhoneNumber";

const Phone: React.FC = () => {
  const [showAdditionalCharts, setShowAdditionalCharts] = useState(false);
  const handleCloseModal = () => {
    setShowAdditionalCharts(true);
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-1 md:gap-2 2xl:gap-1 bg-[#a1ebe4]">
        {/* Fixed section */}
        <div className="col-span-12 xl:col-span-3 rounded-xl">
          <AddPhoneNumber onCloseModal={handleCloseModal}/>
        </div>
         
        {showAdditionalCharts ? (
     
        <div className="col-span-12 xl:col-span-9">
          <NoPhoneNumber />
        </div>
            ) : (
        <div className="col-span-9 xl:col-span-9">
        <NoPhoneNumber />
        </div>
         )}
       
       
      </div>
    </>
  );
};

export default Phone;











// "use client";

// import { ApexOptions } from "apexcharts";
// import React from "react";
// import dynamic from "next/dynamic";



// const ChartOne: React.FC = () => {
  
//   return (
//     <div className="fixed col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-9">
//     <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
//       <div className="flex w-full flex-wrap gap-3 sm:gap-5">

//         {/* Your chart content goes here */}
//         <div className="overflow-y-auto max-h-[500px]">
          
//           {/* Add more content as needed */}
//         </div>

//       </div>
//     </div>
//   </div>
//   );
// };

// export default ChartOne;
