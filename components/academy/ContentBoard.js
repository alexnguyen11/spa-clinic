import React from "react";
import Image from "next/image";
import pic01 from "@/public/assets/course/001-ORIENTAL AYURVEDIC.png"
import pic02 from "@/public/assets/course/002- INSTANT PAIN RELIEF neck shoulder.png"
import pic03 from "@/public/assets/course/003-ASIAN FOOT REFLEXOLOGY.png"
import pic04 from "@/public/assets/course/006-RECOVERY ORGAN FUNCTION.png"
import pic05 from "@/public/assets/course/005.png"
import pic06 from "@/public/assets/course/006.png"
import pic07 from "@/public/assets/course/007.png"
import pic08 from "@/public/assets/course/008.png"
import pic09 from "@/public/assets/course/009.png"
import pic10 from "@/public/assets/course/010.png"
import pic11 from "@/public/assets/course/011.png"
import pic12 from "@/public/assets/course/012.png"

const ContentBoard = () => {
  const programs = [
    {
      id: 1,
      Ename: "oriential ayurvedic head shampoo and massage course",
      Vname: "gội đầu dưỡng sinh chuẩn trung hoa",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: pic01,
      price: 750,
    },
    {
      id: 2,
      Ename: "instant pain relief for neck-head-shoulders massage",
      Vname: "trị liệu vai gáy chuyên sâu",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: pic02,
      price: 450,
    },
    {
      id: 3,
      Ename: "asian food reflexology certificate course",
      Vname: "trị liệu chân chuyên sâu",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: pic03,
      price: 950,
    },
    {
      id: 4,
      Ename: "recovery organ function body therapy certificate",
      Vname: "trị liệu body, phục hồi chức năng tạng phủ",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: pic04,
      price: 675,
    },
    {
      id: 5,
      Ename: "oriental ayurveda foot spa treatment course",
      Vname: "bài phế hậu covid, thải độc phổi",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: pic05,
      price: 450,
    },
    {
      id: 6,
      Ename: "deep tissue massage therapy advance technique",
      Vname: "trị liệu toàn thân chuyên sâu",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: pic06,
      price: 1570,
    },
    {
      id: 7,
      Ename: "ayurveda instant fat loss by acupressure body detox course",
      Vname: "giảm béo dưỡng sinh, vỡ mỡ tại chỗ không sâm lấn",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: pic07,
      price: 840,
    },
    {
      id: 8,
      Ename: "ayurveda spa hot stone massage certificate course",
      Vname: "massage body + đá nóng thư giản",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: pic08,
      price: 560,
    },
    {
      id: 9,
      Ename: "professional qualification ayurveda massage course",
      Vname: "massage chuẩn trung hoa",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: pic09,
      price: 1120,
    },
    {
      id: 10,
      Ename: "facelift massage treatment with jade pearl course",
      Vname: "massage mặt ngọc",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: pic10,
      price: 560,
    },
    {
      id: 11,
      Ename: "skin care basic course",
      Vname: "chăm sóc da cơ bản",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: pic11,
      price: 840,
    },
    {
      id: 12,
      Ename: "treatment of acne and melasma freckless, pitted scars, face & skin recovery",
      Vname: "điều trị mụn, nám, tàn nhang, sẹo rỗ, phục hồi da",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: pic12,
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
      <div className="flex flex-wrap -mx-1 lg:-mx-4 ">
        {programs.map((program) => (
          <div
            key={program.id}
            className="my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
          >
            <div className="overflow-hidden rounded-lg shadow-lg cursor-pointer md:h-[23rem] text-xs">
              <Image
                alt="Placeholder"
                className="block h-auto w-full"
                src={program.img}
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
              <div className="max-w-[18rem] md:text-[0.6rem] text-[0.5rem] m-4 inset-x-0 bottom-0 ">
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
