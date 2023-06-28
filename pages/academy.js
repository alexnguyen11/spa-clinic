import React from "react";
import ContentBoard from "@/components/academy/ContentBoard";
import ContactCard from "@/components/academy/ContactCard";
import Image from "next/image";
import ProgramImg from "@/public/assets/background.jpeg";
import ProgramImg2 from "@/public/assets/background2.jpeg";

const academy = () => {
  return (
    <div className="w-full ">
      <div className="w-full relative h-[400px] overflow-hidden -z-50">
        <Image src={ProgramImg} layout="fill" objectFit="cover"  />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="tracking-[.25rem] uppercase text-white md:text-[3rem] m-4 font-light">
            Taichi Health & Beauty Academy Center
          </h1>
          <h2 className="tracking-[.14rem] uppercase text-white md:text-xl m-4 font-thin">
            Trung Tâm đào tạo & dạy nghề spa dưỡng sinh
          </h2>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-2 py-16">
        <div className="w-full h-full mx-auto p-2 flex flex-col justify-center items-center">
          <div>
            {" "}
            <h1 className="tracking widest uppercase text-2xl mb-4">
              What We Provide
            </h1>
          </div>

          <div className="py-4 max-w-[70%] m-auto text-center">
            <p className="m-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              aperiam eligendi impedit minus animi corrupti nulla, error
              inventore eveniet tempore, eos consequuntur iusto. Deleniti est
              sit voluptates eligendi blanditiis quidem.
            </p>
            <p className="m-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <ContentBoard />
      </div>
      <div className="w-full relative h-[600px] overflow-hidden -z-50">
        <div className="absolute inset-0">
          <Image
            src={ProgramImg2}
            layout="fill"
            objectFit="cover"
            className="opacity-500"
            style={{ zIndex: -1 }}
          />
        </div>
        <ContactCard />
      </div>
    </div>
  );
};

export default academy;
