import MassageService from "@/src/components/massage/MassageService";
import { tmj } from "@/public/assets/massage";

const TMJ = () => {
  return (
    <div>
      {" "}
      <MassageService
        massageService={tmjInjuryRehab}
        caution={caution}
        difference={difference}
      />
    </div>
  );
};

const tmjInjuryRehab = {
  massageName: "TMJ Treatment / Injury Rehab",
  imagePath: tmj,
  massageTitle: "TMJ & Injury Rehabilitation",
  massageDetails:
    "TMJ Treatment focuses on the relief of temporomandibular joint dysfunction and associated pain. This therapy also encompasses broader injury rehabilitation methods to promote recovery from various musculoskeletal injuries. Through targeted techniques, our therapists work diligently to reduce inflammation, improve joint function, and promote tissue repair. This treatment is integral for those suffering from jaw discomfort, migraines, and other related complications.",
  customizeTitle: "Personalized Rehab Sessions",
  customizeDetails:
    "Our therapists are proficient in TMJ dysfunction and general injury rehab, ensuring each session is tailored to your specific recovery needs. Alongside hands-on therapy, we provide guidance on exercises and techniques to expedite recovery.",
  benefitTitle: "Benefits of TMJ Treatment & Injury Rehab",
  benefitDetails:
    "Alleviated Jaw Pain, Reduced Inflammation, Improved Joint Mobility, Accelerated Injury Recovery, Relief from Headaches, Strengthened Muscular Function, Restored Range of Motion, Enhanced Overall Well-being",
};

const caution = {
  cautionTitle: "",
  cautionDetails: "",
};

const difference = {
  differenceTitle: "",
  differenceDetails: "",
};

export default TMJ;
