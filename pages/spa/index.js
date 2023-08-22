import React from "react";
import ServiceCard from "@/components/service/ServiceCard";
import Banner from "@/components/service/Banner";
import Link from "next/link";

const index = () => {
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

  return (
    <div className="w-full">
    <Banner/>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="">
          <h1 className="tracking widest uppercase text-2xl font-bold text-gray-700 mb-5 mt-20">
            Spa Services
          </h1>
        </div>
        <div className="my-10">
          {spas.map((spa) => (
            <Link href="/booking">
              <ServiceCard
                key={spa.id}
                title={spa.title}
                desc={spa.desc}
                price={spa.price}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
