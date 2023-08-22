import React from "react";
import ProgramImage from "@/public/assets/spa.jpeg";
import ProgramCard from "./ProgramCard";

const ProgramBoard = () => {
  const programs = [
    {
      id: 1,
      vname: "Gội đầu dưỡng sinh chuẩn trung hoa",
      ename: "ayurvedic head shampoo chineese standard",
      img: { ProgramImage },
    },
    {
      id: 2,
      vname: "Marketing + Sale tư vấn khách hàng, xây dựng thương hiệu cá nhân",
      ename: "Marketing + Sale customer consultation, personal branding",
      img: { ProgramImage },
    },
    {
      id: 3,
      vname: "Chăm sóc da cơ bản",
      ename: "basic skin care",
      img: { ProgramImage },
    },
  ];

  return (
    <div className="w-full h-full">
      <div className="max-w-[1400px] mx-auto px-2 py-[10rem] flex flex-col items-center justify-center">
        <div className="">
          <h1 className="tracking widest uppercase text-2xl">Our Programs</h1>
        </div>
        <a className="underline my-5 font-semibold" href="/academy">
          See all courses here
        </a>
        <div className="flex flex-wrap m-2 justify-center items-center">
          {programs.map((program) => (
            <div key={program.id} className="m-4">
              <ProgramCard
                vname={program.vname}
                ename={program.ename}
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
