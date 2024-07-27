// src/components/Login/page.tsx
"use client";
import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Agent from "@/components/Agent/page";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const supabaseUrl = "https://muizndhkpdgmcvyctfim.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11aXpuZGhrcGRnbWN2eWN0ZmltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE2MzU2NDQsImV4cCI6MjAzNzIxMTY0NH0.EqKsWHm3sAXV6jeMmcBiswc0Hd91vHPjv-_lhNRbev8";
const supabase = createClient(supabaseUrl, supabaseKey);

interface LoginProps {
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<{ setShowSignup: (show: boolean) => void }> = ({ setShowSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const session = localStorage.getItem("supabaseSession");
    if (session) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset error state
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message);
    } else {
      localStorage.setItem("supabaseSession", JSON.stringify(data.session));
      setIsLoggedIn(true);
    }
  };

  if (isLoggedIn) {
    return (
      <DefaultLayout>
        <Agent />
      </DefaultLayout>
    );
  }

  return (
    <div className="bg-gray-100 flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-3 rounded-lg bg-white p-8 shadow-md">
        <h1 className="text-center text-2xl font-bold">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="text-gray-700 block text-sm font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="username"
              className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-gray-700 block text-sm font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 px-4 py-2 font-bold text-white hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Login
          </button>
        </form>
        <p className="text-gray-600 text-center text-sm">
        Don't have an account?{" "}
        <button
          onClick={() => setShowSignup(true)}
          className="text-indigo-600 hover:underline"
        >
          Signup
        </button>
      </p>
      </div>
    </div>
  );
};

export default Login;
