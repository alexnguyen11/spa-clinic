import React from "react";
import Link from "next/link";
import ProfileCard from "./ProfileCard";
import CodeIcon from "@mui/icons-material/Code";

const TeamContainer = () => {
  return (
    <div className="w-full h-full mx-auto px-4md:flex py-4 flex flex-col bg-stone-100 ">
      <div className="w-full flex justify-center my-10">
        {" "}
        <h1 className="tracking widest uppercase text-2xl font-bold text-gray-700">
          Our Team
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-[10rem] justify-center items-center m-auto max-w-6xl mt-[5rem]">
        <div className="text-gray-600 mb-10">
          <div className="m-4 flex">
            <p className="mx-2">
              
            </p>
          </div>
        </div>
        <div className="lex flex-col items-center justify-center md:p-4 p-10">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
};

export default TeamContainer;
