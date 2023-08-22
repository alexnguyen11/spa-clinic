import React from "react";
import ServiceImg from "@/public/assets/spa.jpeg";
import Image from "next/image";

const ServiceCard = ({ title, desc, price }) => {
  return (
    <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:flex-row m-5 overflow-hidden">
      <Image
        className="rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={ServiceImg}
        alt=""
      />

      <div className="flex flex-col justify-start p-6 uppercase">
        <h5 className="mb-2 text-xl font-medium text-neutral-800 ">{title}</h5>
        <p className="mb-4 text-sm text-neutral-600 font-light">{desc}</p>
        <p className="text-xs text-neutral-500 ">{price} CAD</p>
      </div>
    </div>
  );
};

export default ServiceCard;
