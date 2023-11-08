import React from "react";
import Image from "next/image";
import ProfileImage from "@/public/assets/profile.png";

const ProfileCard = () => {
  return (
    <div className="w-[17rem] bg-white shadow-lg cursor-pointer rounded-t-lg ">
      <div>
        <div className=" bg-[#60a5fa] h-[13rem] w-[17rem] rounded-t-lg">
          <Image
            width={180}
            height={210}
            src={ProfileImage}
            className="-translate-y-[7.7rem] translate-x-[3rem]"
          />
        </div>

        <div className="my-5 mx-3 flex flex-col text-[#042f2e]">
          <h1 className="font-semibold">Vincent Dang</h1>
          <p className="text-xs tracking-wide font-light my-4">Founder</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
