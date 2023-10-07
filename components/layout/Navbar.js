import React from "react";
import Link from "next/link";
import MainDropdown from "./MainDropdown";
import { Menu, Close } from "@mui/icons-material/";
import LogoImg from "@/public/assets/logo.png";
import Image from "next/image";

const Navbar = ({ items, handleNav, nav }) => {
  return (
    <div className="flex flex-wrap justify-between items-center w-full h-full p-4 2xl:px-16 z-50">
      <a href="/" className="flex items-center h-30 w-40 overflow-hidden">
        <Image src={LogoImg} className="" alt="Taichi Logo" />
      </a>
      <div>
        <ul className="hidden md:flex">
          {items.map((item) => (
            <li
              key={item.id}
              className="w-[7rem] h-[2rem] flex items-center justify-center ml-10 text-base rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline mb-2 hover:scale-103 transform transition duration-500 hover:font-medium font-semibold whitespace-nowrap "
            >
              {item.name === "Services" ? (
                <MainDropdown item={item.name} />
              ) : (
                <Link href={item.url}>{item.name}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div onClick={handleNav} className="md:hidden ">
        {nav ? <Close className="cursor-pointer" /> : <Menu className="cursor-pointer" />}
      </div>
    </div>
  );
};

export default Navbar;
