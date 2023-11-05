import React from "react";
import MassageCard from "@/src/components/massage/MassageCard";
import {medicalmassage, deeptissue, injurymassage} from "@/public/assets/massage";

const MEDICAL = () => {
  return (
    <div className="p-4 sm:p-8 md:p-16 relative">
      <div className="flex items-center justify-center my-5 md:my-10 lg:mb-[7rem]">
        <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-wider font-semibold uppercase">
          Medical Massages
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

export default MEDICAL;

const massages = [
  {
    id: 1,
    title: "MEDICAL MASSAGE",
    desc: "Medical massage uses scientific principles to balance the nervous and musculoskeletal systems. By applying pressure and stretches, it relieves pain, normalizes muscle tone, and restores posture. Various soft tissue manipulation techniques are employed to treat acute to chronic myofascial pain and dysfunction.",
    url: "/massage/medical-massage",
    img: medicalmassage
  },
  {
    id: 2,
    title: "DEEP TISSUE MASSAGE",
    desc: "Deep tissue massage targets the body's connective tissues, using various techniques to penetrate muscles and fascia. It releases tension and addresses deep muscle pains. Regular sessions enhance its benefits, allowing therapists to address long-term issues, relax the body, and prevent injuries.",
    url: "/massage/deep-tissue-massage",
    img: deeptissue
  },
  {
    id: 3,
    title: "INJURY MASSAGE",
    desc: "Repetitive strain injuries (RSI) impact tendons, muscles, nerves, and joints, often causing pain in areas like the neck, shoulders, and wrists. Common RSIs include Tendonitis, Carpel Tunnel, and Golfer’s Elbow. Symptoms can include numbness, tingling, pain, swelling, and reduced hand dexterity, often intensifying at night.",
    url: "/massage/repetitive-strain-injury-massage",
    img: injurymassage
  },
];
