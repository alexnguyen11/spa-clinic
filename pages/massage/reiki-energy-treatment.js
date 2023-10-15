import MassageService from "@/components/massage/MassageService";
import { reiki } from "@/public/assets/massage";

const REIKI = () => {
  return (
    <div>
      <MassageService
        massageService={reikiEnergyTreatment}
        caution={caution}
        difference={difference}
      />
    </div>
  );
};
const reikiEnergyTreatment = {
  massageName: "Reiki Energy Treatment",
  imagePath: reiki,
  massageTitle: "Holistic Reiki Energy Healing",
  massageDetails:
    "Reiki is a Japanese technique for stress reduction and relaxation that also promotes healing. It's a subtle and effective form of energy healing using spiritually guided life force energy. Reiki practitioners channel this energy to activate the natural healing processes of the patient's body, restoring physical and emotional well-being.",
  customizeTitle: "Intuitive Energy Sessions",
  customizeDetails:
    "Our Reiki practitioners connect with your unique energy frequencies, intuitively addressing areas that require healing and balance. Each session aims to cleanse, heal, and harmonize, fostering a sense of inner peace and vitality.",
  benefitTitle: "Benefits of Reiki Energy Treatment",
  benefitDetails:
    "Emotional Balance, Enhanced Inner Peace, Strengthened Self-healing, Alleviated Stress and Anxiety, Boosted Immunity, Deeper Connection to Self, Release of Energy Blockages, Heightened Intuition",
};

const caution = {
  cautionTitle: "",
  cautionDetails: "",
};

const difference = {
  differenceTitle: "",
  differenceDetails: "",
};

export default REIKI;
