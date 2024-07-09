import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import Agent from "@/components/Agent/page";

export const metadata: Metadata = {
  title: "Sayvai",
 
};

const AgentPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Agent />
    </DefaultLayout>
  );
};

export default AgentPage;
