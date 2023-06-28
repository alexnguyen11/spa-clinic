import { useState, useEffect } from "react";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";

const DropdownMenu = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  const handleItemClick = (url) => {
    setIsOpen(false);
    router.push(url);
  };

  const handleClickOutside = (event) => {
    if (event.target.closest(".dropdown-menu")) {
      return;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-menu z-50">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="flex flex-row"
      >
        <span>{item}</span>
        {isOpen ? <ArrowDropUp /> : <ArrowDropDown />}
      </button>
      {isOpen && (
        <div className="dropdown-menu-content">
          <div className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
            <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800 text-gray-900">
              <div
                onClick={() => handleItemClick("/massage")}
                className="block px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline hover:scale-103 transform transition duration-500 hover:font-medium cursor-pointer"
              >
                Massage
              </div>
              <div
                onClick={() => handleItemClick("/spa")}
                className="block px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline hover:scale-103 transform transition duration-500 hover:font-medium cursor-pointer"
              >
                Spa
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

{
  /**


<div>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="flex flex-row"
      >
        <span>{item}</span>
        {isOpen ? <ArrowDropUp /> : <ArrowDropDown />}
      </button>
      <div
        className={
          !isOpen
            ? "hidden absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48"
            : "absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48"
        }
      >
        <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800 text-gray-900">
          <Link href="/massage">
            <div className="block px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline hover:scale-103 transform transition duration-500 hover:font-medium">
              Massage
            </div>
          </Link>
          <Link href="/spa">
            <div className="block px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline hover:scale-103 transform transition duration-500 hover:font-medium">
              Spa
            </div>
          </Link>
        </div>
      </div>
    </div>

*/
}
