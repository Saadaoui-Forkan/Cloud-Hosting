"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

interface DropdownProps{
    setDropdownOpen: Dispatch<SetStateAction<boolean>>
}

const Dropdown = ({ setDropdownOpen }: DropdownProps) => {
    const router = useRouter()
    const handleLogout = async() => {
        try {
            await axios.get("http://localhost:3000/api/users/logout")
            router.push('/')
            setDropdownOpen(false)
            router.refresh()
        } catch (error) {
            toast.warning("Something went wrong")
        }
    }
    return (
        <div className="absolute right-0 top-8 mt-2 py-2 w-28 bg-white border rounded-lg shadow-lg z-10">
            <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    );
};

export default Dropdown;
