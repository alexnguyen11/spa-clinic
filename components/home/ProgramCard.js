import React from "react";
import Image from "next/image";
import CourseImg from "@/public/assets/home/courseimg.jpeg";

const ProgramCard = ({ vname, ename }) => {
  return (
    <div className="max-w-[350px] bg-white  rounded-lg shadow-lg cursor-pointer h-[22rem] text-xs group/item drop-shadow-md hover:drop-shadow-2xl hover:scale-105 transform transition duration-500 ">
      <div>
        <a className="overflow-hidden" href="#">
          <Image className="rounded-t-lg" src={CourseImg} alt="" />
        </a>
        <a
          href="/booking/#course_register"
          className="inline-flex items-center px-3 py-4 text-base font-medium text-center text-white  rounded-lg bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:outline-none  group/edit invisible group-hover/item:visible transform transition duration-500 absolute -translate-y-[7rem] translate-x-[7rem] tracking-wider"
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
