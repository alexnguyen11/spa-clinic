import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Massage Banner */}
      <div className="bg-yellow-500 text-white text-center py-20 mb-10 rounded-lg">
        <h1 className="text-4xl font-bold mb-2">Our Massage Services</h1>
        <p className="text-lg">
          Relax, rejuvenate, and let us take care of you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        {/* Massage Services List */}
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {massages.map((massage) => (
              <div
                key={massage.id}
                className="p-6 border rounded-lg flex flex-col justify-between"
              >
                <img
                  src="/path-to-your-image.jpg"
                  alt="Massage Type"
                  className="object-cover mb-4 w-full h-48"
                />
                <h2 className="text-2xl font-semibold mb-4">{massage.title}</h2>
                <p className="text-sm mb-4">{massage.desc}</p>
                <div className="mt-auto flex justify-between items-center">
                  <Link href={`/massage/${massage.id}`}>
                    <div className="text-yellow-500 hover:underline">
                      View Details
                    </div>
                  </Link>
                  <Link href="/booking">
                    <div className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-3 rounded-full transition duration-300 ease-in-out">
                      Book Now
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Massage Prices and Add-On Services in the third column */}
        <div className="md:sticky top-10 space-y-10">
          {/* Massage Prices */}
          <div className="p-6 border rounded-lg mb-6 bg-yellow-600 text-gray-800">
            <h3 className="text-2xl font-semibold mb-4">Massage Prices</h3>
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
          <div className="p-6 border rounded-lg bg-yellow-600 text-gray-800">
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

const massages = [
  {
    id: 1,
    title: "therapeutic massage treatement",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    price: 95,
  },
  {
    id: 2,
    title: "relaxation massgae",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    price: 95,
  },
  {
    id: 3,
    title: "deep tissue massae",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    price: 95,
  },
  {
    id: 4,
    title: "thai massgae / sports massage",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    price: 95,
  },
  {
    id: 5,
    title: "reflexology treatment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    price: 95,
  },
  {
    id: 5,
    title: "pain / trigger point release",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    price: 95,
  },
  {
    id: 5,
    title: "pre / post natal massgae",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    price: 95,
  },
  {
    id: 5,
    title: "lymphatic drainage",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    price: 95,
  },
  {
    id: 5,
    title: "essential oil treatment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    price: 95,
  },
  {
    id: 5,
    title: "tmj treatment / injury rehab",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    price: 95,
  },
  {
    id: 5,
    title: "posture adjustment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    price: 95,
  },
  {
    id: 5,
    title: "facial treatment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    price: 95,
  },
  {
    id: 5,
    title: "feet / body scrpaing / paraffin wax",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    price: 95,
  },
  {
    id: 5,
    title: "reiki energy treatment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    price: 95,
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
