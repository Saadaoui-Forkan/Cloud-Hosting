"use client";
import { JWTPayload, NavLink } from "@/utils/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import logo from "../../../public/logo.png";
import Image from "next/image";
import { FiMoreVertical } from "react-icons/fi";
import Dropdown from "./Dropdown";

interface NavbarProps {
  navLinks: NavLink[];
  payload: JWTPayload | null;
  username: string
}

const Navbar = ({ navLinks, payload, username }: NavbarProps) => {
  const pathname: string = usePathname();
  const [openNav, setOpenNav] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  return (
    <div className="flex justify-between items-center shadow-md h-20 relative z-10">
      <Link href="/">
        <Image
          src={logo}
          alt="Logo"
          height={100}
          width={100}
          priority
          className="cursor-pointer"
        />
      </Link>
      {/* Menu Desktop */}
      <div className="hidden md:flex items-center space-x-6 text-gray-700">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className={`${
              pathname === link.path ? "text-accentCyan" : ""
            } hover:text-accentCyan transition duration-300`}
          >
            {link.name}
          </Link>
        ))}
      </div>

        <div className="flex items-center space-x-6 mx-4 relative">
            <div
                className="cursor-pointer md:hidden"
                onClick={() => setOpenNav(!openNav)}
            >
            <div
                className={`bg-darkBlue w-6 h-1 rounded-sm transition-all duration-300 ${
                openNav ? "rotate-45 translate-y-2" : ""
                }`}
            ></div>
            <div
                className={`bg-darkBlue w-6 h-1 my-1 rounded-sm transition-all duration-300 ${
                openNav ? "opacity-0" : ""
                }`}
            ></div>
            <div
                className={`bg-darkBlue w-6 h-1 rounded-sm transition-all duration-300 ${
                openNav ? "-rotate-45 -translate-y-2" : ""
                }`}
            ></div>
            </div>
            {payload ? (
              <div className="flex items-center space-x-2">
                <h2 className="font-bold">{username}</h2>
                <FiMoreVertical
                  className="cursor-pointer text-xl"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                />
              </div>
            ) : (
              <Link
                  href="/login"
                  className="px-2 py-1 bg-lightRed text-white rounded-lg font-bold border-2 border-lightRed hover:text-lightRed hover:bg-white transition duration-300"
              >
                  Login
              </Link>
            )}

            {dropdownOpen ? <Dropdown setDropdownOpen={setDropdownOpen} payload={payload}/> : ""}
        </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-20 left-0 right-0 bg-white shadow-md md:hidden flex flex-col items-center space-y-4 transition-all duration-500 overflow-hidden ${
          openNav ? "max-h-60 py-4" : "max-h-0 py-0"
        }`}
      >
        {navLinks.map((link) => (
            <Link
                key={link.name}
                href={link.path}
                onClick={() => setOpenNav(false)}
                className="text-darkBlue text-lg hover:text-accentCyan transition duration-300"
            >
                {link.name}
            </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
