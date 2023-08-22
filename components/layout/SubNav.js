import React from "react";
import Link from "next/link";
import DropdownMenu from "../home/DropdownMenu";

const SubNav = ({ items }) => {
  return (
    <div className="md:hidden flex items-center justify-center p-5">
      <div>
        <ul className="flex flex-col">
          {items.map((item) => (
            <li
              key={item.id}
              className="w-[7rem] h-[2rem] flex items-center justify-center ml-10 text-base rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline mb-2 hover:scale-103 transform transition duration-500 hover:font-medium font-semibold whitespace-nowrap dark:text-white"
            >
              {item.name === "Services" ? (
                <DropdownMenu item={item.name} />
              ) : (
                <Link href={item.url}>{item.name}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubNav;
