import React from "react";
import ProgramCard from "./ProgramCard";

const ProgramContainer = () => {
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
    <div className="sm:p-16 xs:p-8 px-6 py-12 relative ">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col justify-center items-center my-5 md:my-10">
          <h1 className="tracking-widest uppercase text-2xl md:text-[40px] font-bold">
            Our Programs
          </h1>
          <a className="underline my-5 font-semibold" href="/academy">
            See all courses here
          </a>
        </div>
        <div className="flex gap-10">
          {programs.map((program) => (
            <div key={program.id}>
              <ProgramCard vname={program.vname} ename={program.ename} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramContainer;
