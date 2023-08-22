import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import Link from "next/link";

const PriceCard = () => {
  const prices = [
    {
      duration: 30,
      price: 50,
    },
    {
      duration: 45,
      price: 70,
    },
    {
      duration: 60,
      price: 90,
    },
    {
      duration: 90,
      price: 130,
    },
    {
      duration: 120,
      price: 170,
    },
  ];
  return (
    <div className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-500 via-purple-500 to-blue-500 text-white p-4 w-full flex flex-col items-center justify-center">
      <p className="text-[2rem] font-extrabold my-8 text-yellow-400 uppercase">
        Our Prices - Get $10 off before Christmas day
      </p>
      <div className="grid md:grid-cols-2 gap-4 items-center justify-center">
        <ul className="tracking-wide text-xl font-base">
          {prices.map((price, index) => (
            <li key={index} className="mb-4">
              <CodeIcon /> {price.duration} minutes - ${price.price} + GST
            </li>
          ))}
        </ul>
        <p className="text-2xl my-7 uppercase bg-slate-100 bg-opacity-10 rounded p-5">
          {" "}
          <span className="font-bold text-blue-500">500 CAD </span>
          for <span className="font-bold text-blue-500">6</span> hours massage
        </p>
      </div>

      <Link href="/booking">
        <button className="my-6 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
          Book Now
        </button>{" "}
      </Link>
    </div>
  );
};

export default PriceCard;
