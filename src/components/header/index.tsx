import React from "react";
import { cookies } from "next/headers";
import { verifyTokenClient } from "@/utils/verifyToken";
import Navbar from "./Navbar";
import { NavLink } from "@/utils/types";

const Header = () => {
  const token = cookies().get("jwtToken")?.value || ""
  const payload = verifyTokenClient(token)

  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Articles", path: "/articles?pageNumber=1" },
    ...(payload?.isAdmin ? [{ name: "Admin", path: "/admin" }] : []),
  ];

  return (
    <>
      <Navbar navLinks={navLinks} payload={payload} />
    </>
  );
};

export default Header;
