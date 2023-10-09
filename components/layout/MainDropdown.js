import { useState, useEffect } from "react";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { useRouter } from "next/router";

const MainDropdown = ({ item }) => {
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
        <div className="dropdown-menu-content z-10">
          <div className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
            <div className="px-2 py-2 bg-white rounded-md shadow text-gray-900">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => handleItemClick(service.url)}
                  className="block px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline hover:scale-103 transform transition duration-500 hover:font-medium cursor-pointer"
                >
                  {service.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainDropdown;

const services = [
  {
    id: 1,
    name: "Massage",
    url: "/massage",
  },
  {
    id: 1,
    name: "Spa",
    url: "/spa",
  },
];


{/***






*/}