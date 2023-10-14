import React from "react";
import Image from "next/image";
import Link from "next/link";
import courseImg from "@/public/assets/home/coursePhoto.jpeg";

const ProgramContainer = () => {
  return (
    <div className="bg-gray-900 relative p-8 md:p-16">
      {/* Main content */}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center md:justify-between">
        {/* Left content */}
        <div className="space-y-6 md:pr-8">
          <p className="text-emerald-500 text-xl font-semibold mb-2 uppercase">
            Certificate
          </p>
          <h2 className="text-5xl text-white font-bold mb-4">
            Oriential Aryurvedic Course
          </h2>
          <p className="text-lg text-white">
            Discover the art of massage & spa, and embark on your journey to
            launching a successful business.
          </p>
          <div className="flex space-x-4 mt-4">
            <button className="bg-emerald-500 text-black py-2 px-6 rounded hover:bg-emerald-600">
              Enroll Now
            </button>
            <Link href="/academy">
              <div className="text-emerald-500 border-b-2 border-emerald-500 hover:text-emerald-600">
                Discover More
              </div>
            </Link>
          </div>
        </div>

        {/* Right content */}
        <div className="relative md:ml-10">
          <Image
            src={courseImg}
            alt="Frontend course"
            width={500}
            height={375}
            className="rounded-lg"
          />

          <div className="absolute top-0 right-0 transform translate-x-[-30%] md:translate-x-[-50%] translate-y-[-30%] w-20 md:w-32 lg:w-40 h-20 md:h-32 lg:h-40 rounded-full flex flex-col justify-center items-center bg-white shadow-md p-2">
            <h3 className="text-[0.5rem] md:text-sm text-emerald-900 font-semibold text-center">
              Exclusive Personalized Discounts!
            </h3>
            <Link href="/discounts">
              <div className="text-emerald-600 hover:underline mt-1 text-[0.5rem] md:text-sm">
                Discover More
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramContainer;
