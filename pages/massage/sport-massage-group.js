import React from "react";
import MassageCard from "@/components/massage/MassageCard";
import {sport, injurymassage, reflexology} from "@/public/assets/massage"

const SPORT = () => {
  return (
    <div className="p-4 sm:p-8 md:p-16 relative">
    <div className="flex items-center justify-center my-5 md:my-10 lg:mb-[7rem]">
      <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-wider font-semibold uppercase">
        Sport Massages
      </h1>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-5">
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
    url: "/massage/sports-massage",
    img: sport
  },
  {
    id: 2,
    title: "INJURY MASSAGE",
    desc: "Repetitive strain injuries (RSI) impact tendons, muscles, nerves, and joints, often causing pain in areas like the neck, shoulders, and wrists. Common RSIs include Tendonitis, Carpel Tunnel, and Golfer’s Elbow. Symptoms can include numbness, tingling, pain, swelling, and reduced hand dexterity, often intensifying at night.",
    url: "/massage/repetitive-strain-injury-massage",
    img: injurymassage
  },
  {
    id: 3,
    title: "REFLEXOLOGY",
    desc: "Foot Reflexology at Platinum Massage clinic offers relief from plantar fasciitis, ankle issues, and daily strains. Therapists use traditional techniques targeting the foot and leg to ease pain, reduce stress, and enhance flexibility.",
    url: "/massage/reflexology-massage-treatment",
    img: reflexology
  },
];
