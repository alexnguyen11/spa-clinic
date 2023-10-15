import React from "react";
import Image from "next/image";
import clinicImg from "@/public/assets/home/clinicPhoto.jpeg"; // Update with your image path

const ClinicSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left content - Image */}
        <div>
          <Image
            src={clinicImg}
            alt="Calgary Massage Clinic"
            width={500}
            height={375}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Right content - Text */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold leading-8">
            Tai Chi Massage & Therapy
          </h2>
          <h3 className="text-xl font-semibold text-gray-700">
            Best Choice for a Relaxing Massage
          </h3>
          <p className="text-gray-700">
            We know that when people generally think about massages, they envision a peaceful, relaxing setting where worries and stress are massaged away. There is a lot of truth to that! Many clients visit our office just to get a relaxing massage that ‘just feels good.’ A 60-minute or 90-minute massage can make you feel like an entirely new person. They’re great for pampering yourself or treating someone else to a very special experience.
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>RUNNERS / JOGGERS</li>
            <li>TENNIS PLAYERS</li>
            <li>GOLFERS</li>
            <li>HIGH SCHOOL ATHLETES</li>
            <li>COLLEGE ATHLETES</li>
            <li>ALLEVIATE PAIN</li>
            <li>INCREASE CIRCULATION</li>
            <li>INVIGORATE MUSCLES</li>
            <li>RELEASE HELPFUL ENDORPHINS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClinicSection;
