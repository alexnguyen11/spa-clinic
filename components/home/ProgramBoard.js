import React from "react";
import ProgramImage from "@/public/assets/spa.jpeg";
import ProgramCard from "./ProgramCard";

const ProgramBoard = () => {
  const programs = [
    {
      id: 1,
      title: "Program Name #1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      img: { ProgramImage },
    },
    {
      id: 2,
      title: "Program Name #2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      img: { ProgramImage },
    },
    {
      id: 3,
      title: "Program Name #3",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      img: { ProgramImage },
    },
  ];

  return (
    <div className="w-full">
      <div className="max-w-[1400px] mx-auto px-2 py-16 flex flex-col items-center justify-center">
        <div className="m-2">
          <h1 className="tracking widest uppercase text-2xl">Our Programs</h1>
        </div>
        <div className="flex flex-wrap m-2 justify-center items-center">
          {programs.map((program) => (
            <div key={program.id} className="m-4">
              <ProgramCard
                title={program.title}
                desc={program.desc}
                img={program.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramBoard;
