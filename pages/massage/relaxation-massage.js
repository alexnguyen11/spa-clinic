import React from "react";
import MassageCard from "@/components/massage/MassageCard";

const RELAXATION = () => {
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

export default RELAXATION;

const massages = [
  {
    id: 1,
    title: "SWEDISH MASSAGE",
    desc: "Known as Relaxation Massage, this classic treatment aims to relax the body using techniques like long, flowing strokes with light to medium pressure. It addresses stress, tension, and muscle discomfort. Ideal for first-time clients, Swedish massage enhances circulation and flexibility while alleviating tension.",
    url: "/massage/swedish-massage",
  },
  {
    id: 2,
    title: "DEEP TISSUE MASSAGE",
    desc: "Deep tissue massage targets the body's connective tissues, using various techniques to penetrate muscles and fascia. It releases tension and addresses deep muscle pains. Regular sessions enhance its benefits, allowing therapists to address long-term issues, relax the body, and prevent injuries.",
    url: "/massage/swedish-massage",
  },
  {
    id: 3,
    title: "PRENATAL AND INFANT MASSAGE",
    desc: "Pregnancy massage helps reduce stress, improves mood, and eases pain, decreasing depression and anxiety. Hormonal changes during pregnancy can lead to fatigue, irritability, and physical discomfort, which massage effectively alleviates.",
    url: "/massage/swedish-massage",
  },
  {
    id: 4,
    title: "HOT STONE MASSAGE",
    desc: "Hot Stone Massage, our signature treatment, uses heated stones for deep relaxation. It enhances relaxation, is ideal for those with chronic pain like fibromyalgia and arthritis, and allows effective massage without strong pressure.",
    url: "/massage/swedish-massage",
  },
  {
    id: 5,
    title: "THAI MASSAGE",
    desc: "Thai massage, a holistic approach, offers rhythmic stretching and pressing techniques by skilled practitioners. It alleviates stress, promotes flexibility, and balances the body's energy, enhancing overall well-being.",
    url: "/massage/swedish-massage",
  },
  {
    id: 6,
    title: "REFLEXOLOGY",
    desc: "Foot Reflexology at Platinum Massage clinic offers relief from plantar fasciitis, ankle issues, and daily strains. Therapists use traditional techniques targeting the foot and leg to ease pain, reduce stress, and enhance flexibility.",
    url: "/massage/swedish-massage",
  },
];
