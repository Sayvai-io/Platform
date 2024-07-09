import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Phone from "@/components/Phone/index";

export const metadata: Metadata = {
  title: "Sayvai",
  
};

const PhonePage = () => {
  return (
    <DefaultLayout>
      <Phone />
    </DefaultLayout>
  );
};

export default PhonePage;
