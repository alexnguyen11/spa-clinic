import React from "react";
import Link from "next/link";
import Image from "next/image";

const MassageService = ({ massageService, caution, difference }) => {
  const benefitsArray = massageService.benefitDetails.split(", ");

  return (
    <div className="bg-gray-100 min-h-screen py-6 px-4 md:px-12 lg:px-20">
      {/* Header */}
      <div className="text-center py-4 md:py-8 mb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">
          {massageService.massageName}
        </h1>
      </div>

      {/* Massage Image */}
      <div className="mb-8">
        <Image
          src={massageService.imagePath}
          alt="Swedish Massage"
          className="w-full object-cover rounded-md h-56 md:h-96"
        />
      </div>

      {/* Massage Description */}
      <div className="mb-10 p-4 md:p-6 border rounded-lg bg-white shadow-lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-yellow-600 mb-4 md:mb-6">
          {massageService.massageTitle}
        </h2>
        <p className="text-base md:text-lg mb-4 md:mb-6">
          {massageService.massageDetails}
        </p>

        {/** Caution */}
        <h2 className="text-2xl md:text-3xl font-semibold text-yellow-600 mb-4 md:mb-6">
          {caution.cautionTitle}
        </h2>
        <p className="text-base md:text-lg mb-4 md:mb-6">
          {caution.cautionDetails}
        </p>

        {/** Different */}
        <h2 className="text-2xl md:text-3xl font-semibold text-yellow-600 mb-4 md:mb-6">
          {difference.differenceTitle}
        </h2>
        <p className="text-base md:text-lg mb-4 md:mb-6">
          {difference.differenceDetails}
        </p>

        {/** Customize */}
        <h2 className="text-2xl md:text-3xl font-semibold text-yellow-600 mb-4 md:mb-6">
          {massageService.customizeTitle}
        </h2>
        <p className="text-base md:text-lg mb-4 md:mb-6">
          {massageService.customizeDetails}
        </p>

        {/** Benefit */}
        <h2 className="text-2xl md:text-3xl font-semibold text-yellow-600 mb-4 md:mb-6">
          {massageService.benefitTitle}
        </h2>
        <ul className="list-disc list-inside text-base md:text-lg mb-6 pl-4">
          {benefitsArray.map((benefit, index) => (
            <li key={index} className="mb-2">
              {benefit}
            </li>
          ))}
        </ul>
        <p className="font-semibold text-lg mb-4 md:mb-6">
          Looking to take control of your health? We can Help!
        </p>
        <div className="text-center">
          <Link href="/booking">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 md:px-6 rounded-full transition duration-300 ease-in-out cursor-pointer mb-2 md:mb-4 shadow-md hover:shadow-lg">
              Book Now
            </button>
          </Link>

          <p className="mt-2 text-lg md:text-xl text-yellow-600">
            Therapists Available 7 Days A Week by Appointment
          </p>
        </div>
      </div>
    </div>
  );
};

export default MassageService;
