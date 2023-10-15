import React from "react";
import Link from "next/link";
import spaImg from "@/public/assets/spa/spa.jpeg";
import Image from "next/image";

const index = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Spa Banner */}
      <div className="relative text-white text-center py-20 mb-10 rounded-lg overflow-hidden">
        <Image
          src={spaImg}
          alt="Spa Background"
          layout="fill"
          objectFit="cover"
        />

        <div className="relative">
          <h1 className="text-4xl font-bold mb-2">Our Spa Services</h1>
          <p className="text-lg">
            Indulge in unparalleled luxury, rejuvenate in our serene oasis, and
            let us attend to your every desire.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        {/* Spa Services List */}
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {spas.map((spa) => (
              <div
                key={spa.id}
                className="p-6 border rounded-lg flex flex-col justify-between"
              >
                <img
                  src="/path-to-your-image.jpg"
                  alt={spa.name}
                  className="object-cover mb-4 w-full h-48"
                />
                <h2 className="text-2xl font-semibold mb-4">{spa.title}</h2>
                <p className="text-sm mb-4">{spa.desc}</p>
                <div className="mt-auto flex justify-between items-center">
                  <Link href={`/massage/${spa.id}`}>
                    <div className="text-cyan-500 hover:underline">
                      View Details
                    </div>
                  </Link>
                  <Link href="/booking">
                    <div className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-1 px-3 rounded-full transition duration-300 ease-in-out">
                      Book Now
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Spa Prices and Add-On Services in the third column */}
        <div className="md:sticky top-10 space-y-10">
          {/* Spa Prices */}
          <div className="p-6 border rounded-lg mb-6 bg-cyan-600 text-white">
            <h3 className="text-2xl font-semibold mb-4">Spa Prices</h3>
            <ul className="space-y-3">
              {massageprices.map((priceItem, index) => (
                <li key={index} className="flex justify-between">
                  <span>{priceItem.duration} mins</span>
                  <span>${priceItem.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Add-On Services */}
          <div className="p-6 border rounded-lg bg-cyan-600 text-white">
            <h3 className="text-2xl font-semibold mb-4">Add-On Services</h3>
            <ul className="space-y-3">
              {addons.map((addon) => (
                <li key={addon.id} className="flex justify-between">
                  <span>{addon.title}</span>
                  <span>${addon.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

const spas = [
  {
    id: 1,
    title: "Basic packge 45 mins",
    desc: "scalp massage, facial, shampoo condition, blow dry",
    price: 65,
  },
  {
    id: 2,
    title: "premium package 60 mins",
    desc: "scalp massage, shoulder, neck, nape masage, facial, shampoo condition, blow dry ",
    price: 85,
  },
  {
    id: 3,
    title: "deluxe package 90 mins",
    desc: "scalp massage, facial, shampoo condition, blow dry. shoulder, neck, nape masage. arms, legs massage",
    price: 120,
  },
  {
    id: 4,
    title: "super deluxe package 120 mins",
    desc: "Full body massage. shampoo, conditioner. facial",
    price: 150,
  },
];

const addons = [
  { id: 1, title: "FACE MASSAGE", price: 20.0 },
  { id: 2, title: "HOT STONE THERAPY", price: 15.0 },
  { id: 3, title: "DYNAMIC CUPPING", price: 20.0 },
  { id: 4, title: "PARAFFIN WAX HANDS & FEET", price: 20.0 },
  { id: 5, title: "FOOT STEAM AND SCRUBS", price: 30.0 },
];

const massageprices = [
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
