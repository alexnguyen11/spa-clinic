import React from "react";
import AboutImg from "@/public/assets/about.jpeg";
import StaffCard from "@/components/staff/StaffCard";
import Image from "next/image";

const StoriesSection = () => {
  const staffs = [
    {
      id: 1,
      name: "Sophie Wu",
      position: "Massage Therapist",
      desc: "",
      img: "",
    },
    {
      id: 2,
      name: "Vinh Son Dang",
      position: "Massage Therapist",
      desc: "",
      img: "",
    },
    {
      id: 3,
      name: "Tony Wu",
      position: "Massage Therapist",
      desc: "",
      img: "",
    },
    {
      id: 4,
      name: "Avi Zhen",
      position: "Massage Therapist",
      desc: "",
      img: "",
    },
    {
      id: 5,
      name: "Ann Phong",
      position: "Massage Therapist",
      desc: "",
      img: "",
    },
    {
      id: 6,
      name: "Annie Liu",
      position: "Massage Therapist",
      desc: "",
      img: "",
    },
    {
      id: 7,
      name: "Jie Xu",
      position: "Massage Therapist",
      desc: "",
      img: "",
    },
    {
      id: 8,
      name: "Sara Yao",
      position: "Massage Therapist",
      desc: "",
      img: "",
    },
    {
      id: 9,
      name: "Hanh",
      position: "Hair Technician",
      desc: "",
      img: "",
    },
  ];
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Stories</h2>
          <div className="flex flex-wrap -mx-4 tracking-wide">
            <p className="text-base mt-4">
              Taichi Massage & Therapy was originally built in 2020 during the
              COVID-19 pandemic. Despite experiencing lockdowns, we became busy
              during the summer. On July 27, 2021, we were seriously affected by
              a fire next door. After 13 months of closure and rebuilding, we
              reopened on September 1, 2022. We have assembled a new team of
              registered massage therapists. We are proud to have a dedicated
              team of caring, knowledgeable, and skilled individuals who are
              committed to helping our clients and neighbors achieve their
              health and wellness goals.
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-12">
          <h2 className="text-3xl font-bold mb-8">Our RMT Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Staff Card 1 */}
            {staffs.map((staff) => (
              <StaffCard
                key={staff.id}
                name={staff.name}
                position={staff.position}
                desc={staff.desc}
                img={staff.img}
              />
            ))}

            {/* Repeat similar staff card structure for other team members */}
          </div>
        </div>
      </div>
    </div>
  );
};

const about = () => {
  return (
    <div>
      <section className="flex items-center bg-stone-100 lg:h-screen font-poppins">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="px-4 mb-10 md:text-center md:mb-20">
            <p className="mb-2 text-lg font-semibold text-blue-500 ">
              About Us
            </p>
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
                We at Taichi Massage Clinic focus on finding the "solution to
                the cause" of your pain or stress related condition.
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
                href="/Booking"
                className="px-4 py-2 text-gray-100 bg-blue-500 rounded-md hover:bg-blue-600"
              >
                Book Now
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
      <StoriesSection />
    </div>
  );
};

export default about;
