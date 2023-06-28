import React from "react";
import Image from "next/image";
import ProgramImage from "@/public/assets/spa.jpeg";

const ProgramCard = ({ title, desc, img }) => {
  return (
    <div className="max-w-[350px] bg-white rounded-lg shadow group/item hover:bg-slate-100 drop-shadow-md hover:drop-shadow-2xl hover:scale-105 transform transition duration-500">
      <a href="#">
        <Image className="rounded-t-lg" src={ProgramImage} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 ">{desc}</p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 group/edit invisible group-hover/item:visible transform transition duration-500"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default ProgramCard;
