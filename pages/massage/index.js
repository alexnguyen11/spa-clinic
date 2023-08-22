import React from "react";
import ServiceCard from "@/components/service/ServiceCard";
import PriceCard from "@/components/service/PriceCard";
import Link from "next/link";

const index = () => {
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

  return (
    <div className="w-ful h-fulll">
      <PriceCard />
      <div className="w-full flex flex-col justify-center items-center">
        <div className="">
          <h1 className="tracking widest uppercase text-2xl font-bold text-gray-700 mb-5 mt-20">
            Massage Services
          </h1>
        </div>
        <div className="my-10">
          {massages.map((massage) => (
            <Link href="/booking">
              <ServiceCard
                key={massage.id}
                title={massage.title}
                desc={massage.desc}
                price={massage.price}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
