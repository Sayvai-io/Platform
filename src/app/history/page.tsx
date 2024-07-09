import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";
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
