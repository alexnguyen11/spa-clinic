import React from "react";
import Image from "next/image";
import ProgramImage from "@/public/assets/spa.jpeg";

const ProgramCard = ({ vname, ename, img }) => {
  return (
    <div className="max-w-[350px] bg-white  rounded-lg shadow-lg cursor-pointer h-[22rem] text-xs group/item hover:bg-slate-100 drop-shadow-md hover:drop-shadow-2xl hover:scale-105 transform transition duration-500 ">
      <div>
        <a className="overflow-hidden" href="#">
          <Image className="rounded-t-lg" src={ProgramImage} alt="" />
        </a>
        <a
          href="#"
          className="inline-flex items-center px-3 py-4 text-base font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 group/edit invisible group-hover/item:visible transform transition duration-500 absolute -translate-y-[7rem] translate-x-[7rem] tracking-wider"
        >
          Register Here
        </a>
      </div>

      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-xs font-bold tracking-tight text-gray-900 uppercase tracking widest">
            {ename}
          </h5>
        </a>
        <p className="mb-3 text-xs text-gray-700 uppercase tracking widest">
          {vname}
        </p>
      </div>
    </div>
  );
};

export default ProgramCard;
