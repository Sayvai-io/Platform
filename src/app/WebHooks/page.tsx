
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import WebHooks from "@/components/WebHooks/index";

export const metadata: Metadata = {
  title: "Sayvai",
  
};

const Profile = () => {
  return (
    <DefaultLayout>
       <WebHooks />
    </DefaultLayout>
  );
};

export default Profile;
