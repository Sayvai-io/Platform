import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import History from "@/components/Histroy/index";

export const metadata: Metadata = {
  title: "Sayvai",
  
};

const HistoryPage = () => {
  return (
    <DefaultLayout>
       <History />
    </DefaultLayout>
  );
};

export default HistoryPage;
