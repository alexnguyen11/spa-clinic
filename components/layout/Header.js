import { useState } from "react";
import SubNav from "./SubNav";
import Navbar from "./Navbar";
import ShopingCart from "../cart/ShopingCart";

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
    // {
    //   id: 7,
    //   url: "/shop/cart",
    //   name: <ShopingCart />,
    // },
  ];

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="sticky top-0 md:static h-full max-w-full z-50">
    <div className="rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-white  text-gray-800 drop-shadow-md">
      <Navbar items={items} handleNav={handleNav} nav={nav} />
      <div className={!nav ? "hidden" : ""}>
        <SubNav items={items} />
      </div>
    </div>
  </div>
  );
};

export default Header;
