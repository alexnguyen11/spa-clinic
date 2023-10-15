import React from "react";
import Link from "next/link";
import MainDropdown from "./MainDropdown";
import { Menu, Close } from "@mui/icons-material/";
import LogoImg from "@/public/assets/logo.png";
import Image from "next/image";

const Navbar = ({ items, handleNav, nav }) => {
  return (
    <div className="flex flex-wrap justify-between items-center w-full p-2 md:p-4 2xl:px-16 z-40">
      {/* Logo Section */}
      <Link
        href="/"
        className="flex items-center h-12 md:h-24 w-16 md:w-32 overflow-hidden"
      >
        <Image src={LogoImg} className="" alt="Taichi Logo" />
      </Link>

      {/* Nav Items */}
      <ul className="hidden md:flex space-x-2 md:space-x-4 lg:space-x-6">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-center text-sm md:text-base lg:text-lg px-2 md:px-4 py-1 rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline transform transition duration-500 hover:scale-105 font-semibold whitespace-nowrap"
          >
            {item.name === "Services" ? (
              <MainDropdown item={item.name} />
            ) : (
              <Link href={item.url}>{item.name}</Link>
            )}
          </li>
        ))}
      </ul>

      {/* Hamburger Menu */}
      <div onClick={handleNav} className="md:hidden">
        {nav ? (
          <Close className="cursor-pointer" />
        ) : (
          <Menu className="cursor-pointer" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
