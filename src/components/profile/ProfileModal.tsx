"use client";
import React, { FormEvent, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import { AxiosError } from "@/utils/types";
import axios from "axios";
import { DOMAIN } from "@/utils/constants";
import { useRouter } from "next/navigation";

interface ProfileModalProps {
  setProfileModal: React.Dispatch<React.SetStateAction<boolean>>;
  email: string;
  username: string;
  id: number;
}

const ProfileModal = ({
  setProfileModal,
  email,
  username,
  id,
}: ProfileModalProps) => {
  const router = useRouter();
  const [updatedUsername, setUpdatedUsername] = useState(username);
  const [updatedEmail, setUpdatedEmail] = useState(email);
  const [updatePassword, setUpdatePassword] = useState("");

  const updateProfile = async (e: FormEvent) => {
    e.preventDefault();
    if (updatedUsername === "") toast.error("Please write your username");
    if (updatedEmail === "") toast.error("Please write your email");

    try {
      await axios.put(`${DOMAIN}/users/profile/${id}`, {
        password: updatePassword,
        email: updatedEmail,
        username: updatedUsername,
      });
      router.refresh()
      setProfileModal(false);
    } catch (error) {
      const axiosError = error as AxiosError;
      const errorMessage =
        axiosError.response?.data?.message || "An error occurred";
      toast.error(errorMessage);
      console.log(axiosError);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-[120vw] h-full z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl p-6 mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Edit Profile</h2>
          <button
            onClick={() => setProfileModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaTimes />
          </button>
        </div>

        <form className="flex flex-col gap-4" onSubmit={updateProfile}>
          <label htmlFor="username" className="font-semibold">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            value={updatedUsername}
            onChange={(e) => setUpdatedUsername(e.target.value)}
          />
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            value={updatedEmail}
            onChange={(e) => setUpdatedEmail(e.target.value)}
          />
          <label htmlFor="password" className="font-semibold">
            New Password
          </label>
          <input
            placeholder="Enter your new password"
            type="password"
            id="password"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            value={updatePassword}
            onChange={(e) => setUpdatePassword(e.target.value)}
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileModal;
