import React from "react";
import AboutImg from "@/public/assets/about.jpeg";
import StaffCard from "@/src/components/staff/StaffCard";
import Image from "next/image";
import VincentImg from "@/public/assets/profile/vincent_profile.jpeg";
import EllaImg from "@/public/assets/profile/ella_profile.jpeg";
import SophieImg from "@/public/assets/profile/sophie_profile.jpeg";
import ProfileIcon from "@/public/assets/profile/profile_icon.jpeg";

const StoriesSection = () => {
  const staffs = [
    {
      id: 1,
      name: "Sophie Wu",
      position: "Massage Therapist",
      desc: "",
      img: SophieImg,
    },
    {
      id: 2,
      name: "Vincent Dang",
      position: "Massage Therapist",
      desc: "",
      img: VincentImg,
    },
    {
      id: 4,
      name: "Avi Zhen",
      position: "Massage Therapist",
      desc: "",
      img: ProfileIcon,
    },
    {
      id: 5,
      name: "Ann Phong",
      position: "Massage Therapist",
      desc: "",
      img: ProfileIcon,
    },
    {
      id: 7,
      name: "Jie Xu",
      position: "Massage Therapist",
      desc: "",
      img: EllaImg,
    },
    {
      id: 9,
      name: "Kathy",
      position: "Hair Technician",
      desc: "",
      img: ProfileIcon,
    },

    {
      id: 9,
      name: "Thao",
      position: "Massage Therapist",
      desc: "",
      img: ProfileIcon,
    },
  ];
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-teal-900">Our Stories</h2>
          <div className="flex flex-wrap tracking-wide">
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
          <h2 className="text-3xl font-bold mb-8 text-teal-900">
            Our RMT & Technician Team
          </h2>
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
          </div>
        </div>
      </div>
    </div>
  );
};

const about = () => {
  return (
    <div>
      <StoriesSection />
    </div>
  );
};

export default about;
