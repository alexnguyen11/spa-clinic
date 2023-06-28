import { useState } from "react";
import Link from "next/link";
import DropdownMenu from "../home/DropdownMenu";
import { Menu, Close } from "@mui/icons-material/";

const Header = () => {
  const [nav, setNav] = useState(false);

  const items = [
    {
      id: 1,
      url: "/",
      name: "Home",
    },
    {
      id: 2,
      url: "/about-us",
      name: "About",
    },
    {
      id: 3,
      name: "Services",
    },
    {
      id: 4,
      url: "/booking",
      name: "Booking",
    },
    {
      id: 5,
      url: "/academy",
      name: "Academy",
    },
    {
      id: 6,
      url: "/contact",
      name: "Contact",
    },
  ];

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="h-full max-w-full ">
      <div className="rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-gray-900 border-gray-700 ">
        <div className="flex flex-wrap justify-between items-center w-full h-full p-4 2xl:px-16 border-b border-slate-700">
          <a href="#" class="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8 mr-3"
              alt="Taichi Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Taichi Center
            </span>
          </a>
          <div>
            <ul className="hidden md:flex">
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
          <div onClick={handleNav} className="md:hidden">
            <Menu />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w[45%] h-screen bg-slate-800 p-10 "
              : "fixed left-[-100%] top-0 p-10 "
          }
        >
          <div className="flex w-full items-center justify-between">
            <a href="#" class="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                class="h-8 mr-3"
                alt="Taichi Logo"
              />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Taichi Center
              </span>
            </a>
            <div
              onClick={() => {
                setNav(!nav);
              }}
              className="rounded-full shadow-lg shadown-gray-400 p-3 cursor-pointer"
            >
              <Close />
            </div>
          </div>

          <div className="py-4 flex flex-col">
            <ul className="md:flex">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="w-[6rem] h-[2rem] flex items-center justify-center ml-10 text-sm rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline mb-2 hover:scale-103 transform transition duration-500 hover:font-medium"
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
      </div>
    </div>
  );
};

export default Header;

{
  /***




*/
}
