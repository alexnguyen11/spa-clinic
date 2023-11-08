import MassageService from "@/src/components/massage/MassageService";
import { oil } from "@/public/assets/massage";

const OILTREATMENT = () => {
  return (
    <div>
      <MassageService
        massageService={essentialOilTreatment}
        caution={caution}
        difference={difference}
      />
    </div>
  );
};

const essentialOilTreatment = {
  massageName: "Essential Oil Treatment",
  imagePath: oil,
  massageTitle: "Aromatic Essential Oil Treatment",
  massageDetails:
    "Essential Oil Treatment leverages the power of pure, therapeutic-grade essential oils to create a deeply harmonizing, rejuvenating, and relaxing experience. These oils, extracted from plants, possess distinctive therapeutic properties that can be used to improve physical and emotional well-being. When combined with massage, these aromatic compounds penetrate the skin and work on a cellular level to invigorate, heal, and refresh the body. The treatment also offers the added benefit of aromatherapy, where the mere inhalation of these oils can have a profound impact on mood and emotion.",
  customizeTitle: "A Tailored Aromatic Experience",
  customizeDetails:
    "Our dedicated therapists are proficient in the art of essential oil therapy. Each session is carefully crafted based on your individual needs, using a blend of oils that resonate with your desired outcomes. Whether you seek relaxation, invigoration, or healing, we curate the perfect aromatic journey for you.",
  benefitTitle: "Benefits of Essential Oil Treatment",
  benefitDetails:
    "Holistic Wellness, Enhanced Mood, Deep Relaxation, Skin Nourishment, Detoxification, Boosted Immunity, Improved Respiratory Function, Harmonized Body and Mind",
};

const caution = {
  cautionTitle: "",
  cautionDetails: "",
};

const difference = {
  differenceTitle: "",
  differenceDetails: "",
};

export default OILTREATMENT;
