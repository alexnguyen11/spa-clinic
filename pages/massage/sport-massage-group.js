import React from "react";
import MassageCard from "@/components/massage/MassageCard";

const SPORT = () => {
  return (
    <div className="sm:p-16 xs:p-8 px-6 py-12 relative">
      <div className="flex items-center justify-center my-5 md:my-10 md:mb-[7rem]">
        <h1 className="uppercase md:text-[40px] tracking-wider font-semibold">
          Relaxation Massages
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-8 my-5">
        {massages.map((massage) => (
          <MassageCard massage={massage} />
        ))}
      </div>
    </div>
  );
};

export default SPORT;

const massages = [
  {
    id: 1,
    title: "SPORTS MASSAGE",
    desc: "Sports Massage Therapy aids in injury prevention and promotes muscle health. It improves range of motion, muscle balance, posture, and overall muscle conditioning by targeting muscles, tendons, and ligaments. This therapy alleviates tension and pain, enhancing overall well-being.",
    url: "/massage/swedish-massage",
  },
  {
    id: 2,
    title: "INJURY MASSAGE",
    desc: "Repetitive strain injuries (RSI) impact tendons, muscles, nerves, and joints, often causing pain in areas like the neck, shoulders, and wrists. Common RSIs include Tendonitis, Carpel Tunnel, and Golfer’s Elbow. Symptoms can include numbness, tingling, pain, swelling, and reduced hand dexterity, often intensifying at night.",
    url: "/massage/swedish-massage",
  },
  {
    id: 3,
    title: "REFLEXOLOGY",
    desc: "Foot Reflexology at Platinum Massage clinic offers relief from plantar fasciitis, ankle issues, and daily strains. Therapists use traditional techniques targeting the foot and leg to ease pain, reduce stress, and enhance flexibility.",
    url: "/massage/swedish-massage",
  },
];
