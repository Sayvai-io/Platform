import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Agent from "@/components/Agent/page";

export const metadata: Metadata = {
  title:
    "sayvai",
  description: "sayvai",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Agent />
      </DefaultLayout>
    </>
  );
}
