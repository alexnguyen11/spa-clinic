import React from "react";
import CourseImg from "@/public/assets/academy/courseimg.jpeg";
import Image from "next/image";

const ContentBoard = () => {
  const programs = [
    {
      id: 1,
      Ename: "ayurvedic head shampoo chineese standard",
      Vname: "gội đầu dưỡng sinh chuẩn trung hoa",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 450,
    },
    {
      id: 2,
      Ename: "shoulders and neck therapy speciality",
      Vname: "trị liệu vai gáy chuyên sâu",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 450,
    },
    {
      id: 3,
      Ename: "feet & legs therapy speciality",
      Vname: "trị liệu chân chuyên sâu",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 450,
    },
    {
      id: 4,
      Ename: "body therapy, organ rehabilitation",
      Vname: "trị liệu body, phục hồi chức năng tạng phủ",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 675,
    },
    {
      id: 5,
      Ename: "Lorem ipsum dolor sit amet",
      Vname: "bài phế hậu covid, thải độc phổi",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 450,
    },
    {
      id: 6,
      Ename: "the whole body therapy speciality",
      Vname: "trị liệu toàn thân chuyên sâu",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 1570,
    },
    {
      id: 7,
      Ename: "ayurvedic lose weight with non-invasive",
      Vname: "giảm béo dưỡng sinh, vỡ mỡ tại chỗ không sâm lấn",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 840,
    },
    {
      id: 8,
      Ename: "spa hot stone massage therapy",
      Vname: "massage body + đá nóng thư giản",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 560,
    },
    {
      id: 9,
      Ename: "body massage chineese standard",
      Vname: "massage chuẩn trung hoa",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 1120,
    },
    {
      id: 10,
      Ename: "facial massage with jade pearl",
      Vname: "massage mặt ngọc",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 560,
    },
    {
      id: 11,
      Ename: "skin care basic",
      Vname: "chăm sóc da cơ bản",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 840,
    },
    {
      id: 12,
      Ename: "treatment acne, memorary freackless, face & skin recovery",
      Vname: "điều trị mụn, nám, tàn nhang, sẹo rỗ, phục hồi da",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 560,
    },
  ];

  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div className="w-full flex justify-center my-10">
        {" "}
        <h1 className="tracking-widest uppercase text-3xl font-bold text-emerald-700 mt-[4rem]">
          Our Programs
        </h1>
      </div>
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {programs.map((program) => (
          <div
            key={program.id}
            className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
          >
            <div className="overflow-hidden rounded-lg shadow-lg cursor-pointer md:h-[23rem] text-xs">
              <Image
                alt="Placeholder"
                className="block h-auto w-full"
                src={CourseImg}
              />

              <div className="md:flex flex-row-reverse justify-between">
                <div className="mx-4 py-2 md:py-4 ">
                  <p className="text-grey-darker font-medium w-[4rem]">
                    {program.price} CAD
                  </p>
                </div>

                <div className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="md:mx-auto mx-2">
                    <p className="text-black uppercase max-w-[18rem]">
                      {program.Ename}
                    </p>
                  </h1>
                </div>
              </div>
              <div className="max-w-[18rem] m-4 inset-x-0 bottom-0 ">
                <p className="uppercase">{program.Vname}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentBoard;
