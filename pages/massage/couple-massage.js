import MassageService from "@/src/components/massage/MassageService";
import { couple } from "@/public/assets/massage";

const COUPLE = () => {
  return (
    <div>
      <MassageService
        massageService={coupleMassage}
        caution={caution}
        difference={difference}
      />
    </div>
  );
};

export default COUPLE;

const coupleMassage = {
  massageName: "Couple Massage",
  imagePath: couple,
  massageTitle: "Couple Massage",
  massageDetails:
    "Reignite the spark with our indulgent couple's massage. Delve into an oasis of shared tranquility, weaving together moments of relaxation, intimacy, and genuine connection. Let the stresses of the world fade away as skilled hands rejuvenate both mind and body. Experience luxury side-by-side, creating lasting memories in an ambiance of pure serenity. Your shared journey to relaxation and bonding begins here.",
  customizeTitle: "Customized Sessions",
  customizeDetails:
    "Our highly trained therapists are skilled in injury rehab and pain relief and offer a wide range of massage modalities with their unique, personal styles and special techniques. Your session will always be customized for your individual needs and lifestyle modifications or follow-up care with other modalities or practitioners.",
  benefitTitle: "Benefits of Couples Massage",
  benefitDetails:
    "Strengthens Relationship Bond, Enhances Intimacy and Connection, Shared Relaxation Experience, Increases Feelings of Affection, Encourages Joint Relaxation, Provides Quality Time Together, Eases Couple’s Communication, Simultaneous Stress Relief",
};

const caution = {
  cautionTitle: "",
  cautionDetails: "",
};

const difference = {
  differenceTitle: "",
  differenceDetails: "",
};
