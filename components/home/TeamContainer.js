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
    <div className="w-full h-full mx-auto px-4 md:flex py-4 my-[4rem] flex flex-col bg-stone-100">
      <div className="w-full flex flex-wrap justify-center my-10">
        <h1 className="tracking-widest uppercase text-2xl font-bold text-gray-700">
          Our Team
        </h1>

        <div className="w-full md:flex md:space-x-6 mt-6 items-center justify-center">
          <div className="w-full md:w-2/4">
            <h2 className="text-xl font-semibold mb-2">
              WE HAVE THERAPISTS AVAILABLE 7 DAYS PER WEEK BY APPOINTMENT
            </h2>
            <p className="text-gray-600 tracking-wide">
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
                <div className="w-24 h-24 overflow-hidden rounded-full">
                  <Image src={therapist.imageUrl} alt={therapist.name} />
                </div>
                <h2 className="text-xl font-semibold mt-2">{therapist.name}</h2>
                <p className="text-gray-500">{therapist.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-6">
          <a
            href="/about-us"
            className="text-blue-500 hover:underline"
            target=""
          >
            See More About Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamContainer;
