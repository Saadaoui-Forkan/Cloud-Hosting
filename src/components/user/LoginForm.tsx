"use client";
import { DOMAIN } from "@/utils/constants";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Form Validation
    if (email === "") toast.error("Email is required");
    if (password === "") toast.error("Password is required");
    try {
      setLoading(true);
      await axios.post(`${DOMAIN}/users/login`, {
        email,
        password,
      });
      router.replace("/");
      setLoading(false);
      router.refresh();
    } catch (error: any) {
      toast.error(error?.response.data.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleLogin} className="space-y-6">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your password"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition duration-300 ease-in-out"
        disabled={loading} 
      >
        {loading ? (
          <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-r-2 border-white inline-block"></span>
        ) : (
          "Login"
        )}
      </button>
    </form>
  );
};

export default LoginForm;
