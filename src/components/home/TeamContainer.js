import React from "react";
import VincentImg from "@/public/assets/profile/vincent_profile.jpeg";
import SophieImg from "@/public/assets/profile/sophie_profile.jpeg";
import Image from "next/image";

const TeamContainer = () => {
  const therapists = [
    {
      id: 1,
      name: "Sophie Wu",
      title: "Massage Therapist",
      imageUrl: SophieImg,
    },
    {
      id: 2,
      name: "Vincent Dang",
      title: "Massage Therapist",
      imageUrl: VincentImg,
    },
  ];

  return (
    <div className="sm:p-16 xs:p-8 px-6 py-6 relative mx-auto bg-gray-900">
      <div className="w-full flex flex-wrap justify-center ">
        <h1 className=" text-xl md:text-[40px] font-bold text-gray-200 my-5 md:my-10">
          Our Team
        </h1>

        <div className="w-full md:flex md:space-x-6 md:mt-6 items-center justify-center">
          <div className="w-full md:w-2/4 mx-2">
            <h2 className="text-xl sm:text-xl md:text-2xl font-medium tracking-wide mb-4 text-gray-300">
              WE HAVE THERAPISTS AVAILABLE 7 DAYS PER WEEK BY APPOINTMENT
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-4">
              Our Massage Therapy is Calgary’s most comprehensive, advanced, and
              comfortable massage center. Founded in 2001, we focus on finding
              the “solution to the cause” of your pain or stress-related
              condition. We invite you to experience the benefits of a
              professional massage. Whether you have received massage in the
              past or would like to enjoy one for the first time, our massage
              therapists are here to serve you. Contact us today!
            </p>
          </div>

          <div className="w-full md:w-1/3 flex flex-wrap justify-center my-8">
            {therapists.map((therapist) => (
              <div
                key={therapist.id}
                className="m-4 flex items-center flex-col"
              >
                <div className="w-24 h-24 overflow-hidden rounded-full shadow-md">
                  <Image src={therapist.imageUrl} alt={therapist.name} />
                </div>
                <h2 className="md:text-xl text-base font-semibold mt-2 text-gray-200">
                  {therapist.name}
                </h2>
                <p className="text-gray-400 md:text-base text-sm">
                  {therapist.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-6">
          <a
            href="/about-us"
            className="text-blue-400 hover:underline md:text-base text-sm transition-colors duration-300 hover:text-blue-500"
          >
            See More About Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamContainer;
