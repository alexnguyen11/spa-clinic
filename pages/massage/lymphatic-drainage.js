import MassageService from "@/src/components/massage/MassageService";
import { lymphaticdrainage } from "@/public/assets/massage";

const LYMPHATICDRAINAGE = () => {
  return (
    <div>
      {" "}
      <MassageService
        massageService={lymphaticDrainage}
        caution={caution}
        difference={difference}
      />
    </div>
  );
};

const lymphaticDrainage = {
  massageName: "Lymphatic Drainage",
  imagePath: lymphaticdrainage,
  massageTitle: "Lymphatic Drainage Therapy",
  massageDetails:
    "Lymphatic Drainage is a gentle, rhythmic massage technique designed to stimulate the movement of lymph fluids around the body. This specialized therapy aids in the removal of waste and toxins from the bodily tissues, supporting the immune system and improving overall health. By encouraging the flow of lymph, it can help reduce swelling, improve circulation, and provide relief from post-surgical edema. Lymphatic Drainage is particularly beneficial for those recovering from surgeries, injuries, or those experiencing lymphedema.",
  customizeTitle: "Specialized Care",
  customizeDetails:
    "Our skilled therapists are trained in the intricacies of Lymphatic Drainage, offering a precise and thoughtful approach. Every session is personalized to your specific needs, ensuring optimized lymph flow and enhanced well-being. We also provide guidance on self-care techniques to support lymphatic health.",
  benefitTitle: "Benefits of Lymphatic Drainage",
  benefitDetails:
    "Enhanced Detoxification, Reduced Swelling, Improved Circulation, Support to Immune System, Relief from Post-Surgical Edema, Assistance in Lymphedema Management, Increased Vitality, Promotion of Healing and Recovery",
};

const caution = {
  cautionTitle: "",
  cautionDetails: "",
};

const difference = {
  differenceTitle: "",
  differenceDetails: "",
};

export default LYMPHATICDRAINAGE;
