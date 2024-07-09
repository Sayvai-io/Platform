

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Api from "@/components/Api/index";

export const metadata: Metadata = {
  title: "Sayvai",
  
};

const ApiPage = () => {
  return (
    <DefaultLayout>
      
        <Api />
     
    </DefaultLayout>
  );
};

export default ApiPage;
