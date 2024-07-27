import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Agent from "@/components/Agent/page";
import Login from "@/components/Login/page";
import Signup from "@/components/Signup/page";

export const metadata: Metadata = {
  title: "sayvai",
  description: "sayvai",
};

export default function Home() {
  return (
    <>
      <div>
        <Signup />
      </div>

      {/*<DefaultLayout>*/}
      {/*  <Agent />*/}
      {/*</DefaultLayout>*/}
    </>
  );
}
