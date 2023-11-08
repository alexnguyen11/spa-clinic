import MassageService from "@/src/components/massage/MassageService";
import { therapeutic } from "@/public/assets/massage";

const THERAPEUTIC = () => {
  return (
    <div>
      <MassageService
        massageService={therapeuticMassage}
        caution={caution}
        difference={difference}
      />
    </div>
  );
};

export default THERAPEUTIC;

const therapeuticMassage = {
  massageName: "Therapeutic Massage",
  imagePath: therapeutic,
  massageTitle: "Therapeutic Massage",
  massageDetails:
    "Therapeutic massage is a general term that describes any type of massage modality that helps relieve pain, reduce stress, or work on a specific problem area. It involves manipulating the body's soft tissues, including muscles, connective tissue, tendons, and ligaments. While it shares some techniques with other forms of massage, such as Swedish or deep tissue, therapeutic massage is often more problem-specific. It's particularly beneficial for those with chronic pain or tension, injuries, or specific health conditions. The primary goal of therapeutic massage is to target the root of one's pain or tension and provide relief. Regular sessions can also improve circulation, enhance physical health, and increase overall well-being.",
  customizeTitle: "Customized Sessions",
  customizeDetails:
    "Our highly trained therapists are skilled in injury rehab and pain relief and offer a wide range of massage modalities with their unique, personal styles and special techniques. Your session will always be customized for your individual needs and lifestyle modifications or follow-up care with other modalities or practitioners.",
  benefitTitle: "Benefits of Swedish Massage",
  benefitDetails:
    "Pain Relief, Reduced Muscle Tension, Improved Circulation, Stress Reduction, Enhanced Flexibility, Injury Rehabilitation, Boosted Immune System, Improved Sleep",
};

const caution = {
  cautionTitle: "",
  cautionDetails: "",
};

const difference = {
  differenceTitle: "",
  differenceDetails: "",
};
