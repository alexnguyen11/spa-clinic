import React from "react";
import MassageService from "@/components/massage/MassageService";

const DEEPTISSUE = () => {
  return (
    <div>
      {" "}
      <MassageService
        massageName={deeptissue.massageName}
        imagePath={deeptissue.imagePath}
        massageTitle={deeptissue.massageTitle}
        massageDetails={deeptissue.massageDetails}
        customizeTitle={deeptissue.customizeTitle}
        customizeDetails={deeptissue.customizeDetails}
        benefitTitle={deeptissue.benefitTitle}
        benefitDetails={deeptissue.benefitDetails}
      />
    </div>
  );
};

export default DEEPTISSUE;

const deeptissue = {
  massageName: "Deep Tissue Massage",
  imagePath: "",
  massageTitle: "Deep Tissue Massage",
  massageDetails:
    "This massage style goes deeper into the muscle tissue to reduce spasms and scar tissue that often result from chronic injury or overuse. Often this treatment is a full-body session but can also focus on specific areas like the back, neck, hips or legs. As a result, muscle tension and toxins are released allowing blood and oxygen to circulate properly.",
  customizeTitle: "Customized Sessions",
  customizeDetails:
    "Our highly trained therapists are skilled in injury rehab and pain relief and offer a wide range of massage modalities with their unique, personal styles and special techniques. Your session will always be customized for your individual needs and lifestyle modifications or follow-up care with other modalities or practitioners.",
  benefitTitle: "Benefits of Deep Tissue Massage",
  benefitDetails:
    "Relieve stress, Lowers blood pressure, Reduces stress and anxiety, Breaks up scarred tissue, Improves Athletic Recovery, Can help with labor pain",
};
