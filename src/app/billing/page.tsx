

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Billing from "@/components/Billing/index";

export const metadata: Metadata = {
  title: "Sayvai",
  
};

const BillingPage = () => {
  return (
    <DefaultLayout>
      
        <Billing />
     
    </DefaultLayout>
  );
};

export default BillingPage;
