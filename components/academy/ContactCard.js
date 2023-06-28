import React from "react";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

const ContactCard = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col ">
      <div className="w-full flex justify-center items-center mx-auto px-2 py-16">
        <div className="uppercase text-2xl tracking-widest ">
          <h2>Contact Us For Course Registration</h2>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center text-white font-medium text-xl tracking-wider">
        <div className="w-[20rem] h-[16rem] rounded-lg  flex flex-col items-center justify-center m-4 mr-5 bg-gray-500 bg-opacity-30 cursor-pointer">
          <LocationOnIcon className="text-[3rem]" />
          <span className="my-5 ">Calgary, Alberta</span>
        </div>
        <div className="w-[20rem] h-[16rem] p-10 rounded-lg  flex flex-col items-center justify-center m-4 ml-5 cursor-pointer bg-gray-500 bg-opacity-30">
          <PhoneIcon className="text-[3rem]" />
          <span className="my-5 ">+987654321</span>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
