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
      name: "Vincent Dang",
      position: "Massage Therapist",
      desc: "",
      img: VincentImg,
    },
    {
      id: 2,
      name: "Sophie Wu",
      position: "Massage Therapist",
      desc: "",
      img: SophieImg,
    },
    
    {
      id: 3,
      name: "Avi Zhen",
      position: "Massage Therapist",
      desc: "",
      img: ProfileIcon,
    },
    {
      id: 4,
      name: "Ann Phong",
      position: "Massage Therapist",
      desc: "",
      img: ProfileIcon,
    },
    {
      id: 5,
      name: "Jie Xu",
      position: "Massage Therapist",
      desc: "",
      img: EllaImg,
    },
    {
      id: 6,
      name: "Kathy",
      position: "Hair Technician",
      desc: "",
      img: ProfileIcon,
    },

    {
      id: 7,
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
            Taichi Spa Beauty Oriental Ayuverdic Center in the heart of serenity, Tranquil Oasis began as a sanctuary for those seeking respite through the healing touch of massage therapy. Our journey commenced with a singular vision: to provide an unparalleled experience of relaxation and rejuvenation. The essence of our treatments lies in the delicate fusion of traditional techniques and modern wellness practices.
            </p>
            <p className="text-base mt-4">
            As whispers of our bespoke massages traveled, we embraced the ancient wisdom of Oriental Ayurvedic treatments, incorporating a specialized hair spa that promises not only relaxation but a restoration of vitality and luster to every strand. The gentle hands of our therapists dance in rhythmic harmony with nourishing oils, creating a symphony of scents and sensations that transport you to a realm of inner peace.
            </p>
            <p className="text-base mt-4">
            Our commitment to beauty and wellness blossomed beyond the confines of personal treatment, aspiring to share our knowledge and passion with the world. Thus, the Taichi Spa Beauty Oriental Ayuverdic Academy was born. A center of learning, it is dedicated to educating aspiring students in the art of beauty and spa therapies, with a particular emphasis on Chinese Oriental and Ayurvedic hair spa techniques.
            </p>
            <p className="text-base mt-4">
            At the academy, the ancient meets the avant-garde, as students are immersed in a curriculum that blends time-honored practices with contemporary beauty science. Our courses are meticulously crafted, ensuring that each student embarks on a transformative educational journey, equipped with the skills to heal, the knowledge to innovate, and the wisdom to continue the legacy of holistic wellness.
            </p>
            <p className="text-base mt-4">
            Taichi Spa Beauty has evolved from a humble massage clinic to a beacon of learning and an arbiter of the holistic spa experience. We invite you to partake in this continuous journey, be it as a guest seeking solace or as a student eager to explore the boundless possibilities of beauty and spa therapy.
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
