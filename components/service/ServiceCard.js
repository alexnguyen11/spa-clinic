import React from "react";
import ServiceImg from "@/public/assets/spa.jpeg";
import Image from "next/image";

const ServiceCard = ({ title, desc, price }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md m-5 overflow-hidden">
      
      <div className="flex-shrink-0">
        <Image
          className="object-cover md:h-auto md:w-48"
          src={ServiceImg}
          alt={title}
        />
      </div>

      <div className="p-6 flex flex-col justify-between space-y-4 uppercase">
        <div>
          <h5 className="text-xl font-medium text-neutral-800">{title}</h5>
          <p className="text-sm text-neutral-600 font-light">{desc}</p>
        </div>
        <p className="text-xs text-neutral-500 mt-auto">{price} CAD</p>
      </div>
      
    </div>
  );
};

export default ServiceCard;
