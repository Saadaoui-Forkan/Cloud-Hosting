"use client";
import { DOMAIN } from "@/utils/constants";
import { JWTPayload } from "@/utils/types";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

interface DropdownProps{
    setDropdownOpen: Dispatch<SetStateAction<boolean>>
    payload: JWTPayload | null;
}

const Dropdown = ({ setDropdownOpen, payload }: DropdownProps) => {
    const router = useRouter()
    const handleLogout = async() => {
        try {
            await axios.get(`${DOMAIN}/users/logout`)
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
            <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={()=>setDropdownOpen(false)}
            >
                <Link href={`/profile/${payload?.id}`}>Profile</Link>
            </button>
        </div>
    );
};

export default Dropdown;
