import React from "react";
import { hotstone } from "@/public/assets/massage";
import MassageService from "@/src/components/massage/MassageService";

const HOTSTONE = () => {
  return (
    <div>
      <MassageService massageService={hotstoneMassage} caution={caution} difference={difference} />
    </div>
  );
};

export default HOTSTONE;

const hotstoneMassage = {
  massageName: "Hot Stone Massage",
  imagePath: hotstone,
  massageTitle: "Discover the Power of a Hot Stone Massage",
  massageDetails:
    "With the placement of smooth, water-heated stones at key points of the body, this treatment will help relax your muscles and allow the therapist to access your deeper muscle layers. Combining hot stone protocols with a full body massage provides a very healing and effective experience. The hot stones also expand blood vessels, which increase blood flow throughout the body. The hot stones have a sedative effect that can help relieve chronic pain, reduce stress, and promote deep relaxation.",
  customizeTitle: "Customized Sessions",
  customizeDetails:
    "Our highly trained therapists are skilled in injury rehab and pain relief and offer a wide range of massage modalities with their unique, personal styles and special techniques. Your session will always be customized for your individual needs and lifestyle modifications or follow-up care with other modalities or practitioners.",
  benefitTitle: "Benefits of Hot Stone Massage",
  benefitDetails:
    "Relieves muscle tension, Promotes deep relaxation, Increases circulation, Improves metabolism, Reduces stress and anxiety, Eases muscle stiffness, Releases toxins, Enhances mental clarity, Can alleviate pain, Supports immune system function",
};

const caution = {
  cautionTitle: "Who Shouldn’t Get a Hot Stone Massage",
  cautionDetails:
    "Consult your doctor if you have a medical condition, such as high blood pressure, diabetes, heart disease, varicose veins, migraines, autoimmune disease, decreased pain sensitivity, cancer, autoimmune disease, epilepsy, tumors, or metal implants, or are on medication that thins the blood. Also check with your doctor if you have had recent surgery or have recent wounds or areas of weakened or inflamed skin. Pregnant women and children should avoid hot stone massage.",
};

const difference = {
    differenceTitle: "How Does Hot Stone Massage Differ From Other Types of Massage?",
    differenceDetails: "Our Signature Massage! Hot Stone Massage is a form of massage therapy that follows the same principles of Swedish Massage with the addition of heated stones, which helps lead to deep relaxation. Adding heat to specific areas on the body enhances the feelings of relaxation and peace. Recommended in particular for individuals suffering from fibromyalgia, arthritis or other chronic pain. The penetrating effects of the heated stones allows the massage to be delivered without excessive pressure."
}