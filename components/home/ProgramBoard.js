import React from "react";
import ProgramCard from "./ProgramCard";
import backgroundImage from "@/public/assets/home/programbackground.jpeg";

import Image from "next/image";

const ProgramBoard = () => {
  const programs = [
    {
      id: 1,
      vname: "Gội đầu dưỡng sinh chuẩn trung hoa",
      ename: "ayurvedic head shampoo chineese standard",
    },
    {
      id: 2,
      vname: "giảm béo dưỡng sinh, vỡ mỡ tại chỗ không sâm lấn",
      ename: "ayurvedic lose weight with non-invasive",
    },
    {
      id: 3,
      vname: "Chăm sóc da cơ bản",
      ename: "basic skin care",
    },
  ];

  return (
    <div className="w-full h-full">
      <div className="max-w-[1400px] mx-auto px-2 my-[4rem] flex flex-col items-center justify-center">
        <div className="">
          <h1 className="tracking-widest uppercase text-2xl">Our Programs</h1>
        </div>
        <a className="underline my-5 font-semibold" href="/academy">
          See all courses here
        </a>
        <div className=" w-[70.5rem] h-[30rem] rounded-lg flex flex-col items-center justify-center p-6 shadow-lg overflow-hidden relative">
          <Image src={backgroundImage} layout="fill" objectFit="cover" />

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="mb-2 uppercase md:text-5xl text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-400">
              Special Offer
            </h2>

            <p className="mb-4 md:text-2xl text-[1rem] tracking-wide font-light my-5 text-white">
              Don't miss out on our limited-time promotion
            </p>
            <ul className="md:text-lg text-[1rem] list-disc list-inside pl-4 mb-4 text-white">
              <li className="mb-4">
                Any 3 courses:{" "}
                <span className="font-bold uppercase">30% off</span>
              </li>
              <li className="mb-4">
                Any 4 courses:{" "}
                <span className="font-bold uppercase">40% off</span>
              </li>
              <li className="mb-4">
                Any 5 courses:{" "}
                <span className="font-bold uppercase">50% off</span>
              </li>
              <li className="mb-4">
                All courses:{" "}
                <span className="font-bold uppercase">70% off</span>
              </li>
            </ul>
            <p className="font-semibold uppercase tracking-wider text-xl text-white ">
              Total for all courses:{" "}
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-amber-700 to-orange-400">
                $8525
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-wrap m-2 justify-center items-center">
          {programs.map((program) => (
            <div key={program.id} className="m-5">
              <ProgramCard vname={program.vname} ename={program.ename} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramBoard;
