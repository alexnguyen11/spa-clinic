import React from "react";
import AboutImg from "@/public/assets/about.jpeg";
import Image from "next/image";

const about = () => {
  return (
    <section className="flex items-center bg-stone-100 lg:h-screen font-poppins">
      <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="px-4 mb-10 md:text-center md:mb-20">
          <p className="mb-2 text-lg font-semibold text-blue-500 ">About Us</p>
          <h2 className="pb-2 text-2xl font-bold text-gray-800 md:text-4xl ">
            What we do
          </h2>
          <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
            <div className="flex-1 h-2 bg-blue-200"></div>
            <div className="flex-1 h-2 bg-blue-400"></div>
            <div className="flex-1 h-2 bg-blue-300"></div>
          </div>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="w-full px-4 mb-10 md:w-1/2 lg:mb-0 ">
            <h2 className="mb-4 text-2xl font-bold text-gray-700 ">
              We are providing a better facility
            </h2>
            <p className="mb-4 text-base leading-7 text-gray-500 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <ul className="mb-10">
              <li className="flex items-center mb-4 text-base text-gray-600 ">
                Services and Programs
              </li>
              <li className="flex items-center mb-4 text-base text-gray-600 ">
                Value for money
              </li>
              <li className="flex items-center mb-4 text-base text-gray-600 ">
                Support Team
              </li>
              <li className="flex items-center mb-4 text-base text-gray-600 ">
                Successful Growth for business
              </li>
            </ul>
            <a
              href="#"
              className="px-4 py-2 text-gray-100 bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Learn more
            </a>
          </div>
          <div className="relative w-full px-4 mb-10 md:w-1/2 lg:mb-0">
            <Image
              src={AboutImg}
              alt=""
              className="relative z-40 object-cover w-full rounded-md md:h-96 h-44"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
