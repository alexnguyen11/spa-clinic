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
    <section className="bg-violet-200 text-black p-6 w-full flex flex-col items-center justify-center space-y-6">
      <h1 className="text-2xl font-extrabold uppercase tracking-wider">
        Our Prices - Get $10 off before Christmas day
      </h1>
      
      <div className="grid md:grid-cols-2 gap-6 items-start justify-center">
        <ul className="space-y-3 text-lg font-medium tracking-wide">
          {prices.map((price, index) => (
            <li key={index} className="flex items-center space-x-2">
              <CodeIcon />
              <span>{price.duration} minutes - ${price.price} + GST</span>
            </li>
          ))}
        </ul>
        
        <div className="text-2xl bg-opacity-10 rounded p-6">
          <p className="mb-2 uppercase tracking-wide">Special Offer</p>
          <p>
            <span className="font-bold text-blue-500">500 CAD </span>
            for <span className="font-bold text-blue-500">6</span> hours massage
          </p>
        </div>
      </div>

      <Link href="/booking">
        <div className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded transition duration-300 ease-in-out transform hover:scale-105">
          Book Now
        </div>
      </Link>
    </section>
  );
};

export default PriceCard;
