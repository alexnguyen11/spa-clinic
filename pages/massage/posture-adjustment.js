import MassageService from "@/components/massage/MassageService";
import { postureadj } from "@/public/assets/massage";

const POSTUREADJUSTMENT = () => {
  return (
    <div>
      {" "}
      <MassageService
        massageService={postureAdjustment}
        caution={caution}
        difference={difference}
      />
    </div>
  );
};

const postureAdjustment = {
    massageName: "Posture Adjustment",
    imagePath: postureadj,
    massageTitle: "Postural Alignment Therapy",
    massageDetails:
      "Posture Adjustment aims to correct imbalances in the body's alignment, often resulting from prolonged sitting, habitual posture, or injuries. Proper alignment is pivotal to prevent musculoskeletal complications and chronic pain. Our therapists utilize hands-on techniques and provide actionable strategies to correct and maintain optimal posture, helping clients achieve balance and symmetry in their bodies.",
    customizeTitle: "Tailored Postural Guidance",
    customizeDetails:
      "Every individual's posture is unique. Our therapists analyze your specific alignment concerns and develop a plan tailored to your needs, ensuring effective and lasting results.",
    benefitTitle: "Benefits of Posture Adjustment",
    benefitDetails:
      "Restored Body Balance, Reduced Strain on Joints, Improved Spinal Health, Alleviated Chronic Pain, Enhanced Physical Appearance, Increased Energy Levels, Optimized Muscular Function, Boosted Confidence",
  };
  

const caution = {
  cautionTitle: "",
  cautionDetails: "",
};

const difference = {
  differenceTitle: "",
  differenceDetails: "",
};

export default POSTUREADJUSTMENT;
