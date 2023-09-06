import React from "react";
import ContentBoard from "@/components/academy/ContentBoard";
import Image from "next/image";
import ProgramImg from "@/public/assets/background.jpeg";
import CourseInfo from "@/components/academy/CourseInfo";
import PromoCard from "@/components/academy/PromoCard";

const academy = () => {
  return (
    <div className="w-full">
      <div className="w-full relative h-[400px] overflow-hidden -z-50">
        <Image src={ProgramImg} layout="fill" objectFit="cover" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="tracking-[.25rem] uppercase text-white md:text-[3rem] m-4 font-light">
            Taichi Health & Beauty Academy Center
          </h1>
          <h2 className="tracking-[.14rem] uppercase text-white md:text-xl m-4 font-thin">
            Trung Tâm đào tạo & dạy nghề spa dưỡng sinh
          </h2>
        </div>
      </div>

      <div className="w-full h-full mx-auto px-4md:flex py-4 flex flex-col bg-stone-100 ">
        <div className="w-full flex justify-center my-10">
          {" "}
          <h1 className="tracking widest uppercase text-2xl font-bold text-gray-700">
            What We Provide
          </h1>
        </div>
        <CourseInfo />
      </div>
      <PromoCard />
      <ContentBoard />
    </div>
  );
};

export default academy;
