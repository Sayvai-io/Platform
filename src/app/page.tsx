// src/app/page.tsx
'use client';
import { useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Login from "@/components/Login/page";
import Signup from "@/components/Signup/page";

export default function Home() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      {showSignup ? (
        <Signup setShowSignup={setShowSignup} />
      ) : (
        <Login setShowSignup={setShowSignup} />
      )}
    </>
  );
}