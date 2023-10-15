import React from "react";
import MassageService from "@/components/massage/MassageService";
import { swedish } from "@/public/assets/massage/";

const SWEDISH = () => {
  return (
    <div>
      <MassageService
        massageService={swedishMassage}
        caution={caution}
        difference={difference}
      />
    </div>
  );
};

export default SWEDISH;

const swedishMassage = {
  massageName: "Swedish Massage",
  imagePath: swedish,
  massageTitle: "Relaxation & Stress Reduction",
  massageDetails:
    "This classic massage treatment is also known as a Relaxation Massage and the goal is to relax the entire body through various techniques such as long, flowing strokes using light to medium pressure. Your session will address such issues as stress, tension and mild to moderate muscle discomfort. Swedish massage is often recommended for first time massage clients and is excellent for improving circulation and flexibility while easing tension.",
  customizeTitle: "Customized Sessions",
  customizeDetails:
    "Our highly trained therapists are skilled in injury rehab and pain relief and offer a wide range of massage modalities with their unique, personal styles and special techniques. Your session will always be customized for your individual needs and lifestyle modifications or follow-up care with other modalities or practitioners.",
  benefitTitle: "Benefits of Swedish Massage",
  benefitDetails:
    "Relieve stress, Get rid of anxiety, Reduce fatigue, Rejuvenate your spirit, Alleviate pain, Increase circulation, Invigorate muscles, Release helpful endorphins",
};

const caution = {
  cautionTitle: "",
  cautionDetails: "",
};

const difference = {
  differenceTitle: "",
  differenceDetails: "",
};
