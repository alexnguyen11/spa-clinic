import MassageService from "@/src/components/massage/MassageService";
import { paintriggerpointrelease } from "@/public/assets/massage";

const PAINRELEASE = () => {
  return (
    <div>
      <MassageService
        massageService={painTriggerPointRelease}
        caution={caution}
        difference={difference}
      />
    </div>
  );
};

export default PAINRELEASE;

const painTriggerPointRelease = {
    massageName: "Pain / Trigger Point Release",
    imagePath: paintriggerpointrelease,  
    massageTitle: "Pain & Trigger Point Release Therapy",
    massageDetails:
      "Pain and Trigger Point Release is a specialized approach focusing on the detection and release of tight knots or 'trigger points' within muscles that cause pain over a larger area. These points can often refer pain to different parts of the body. By targeting these specific points, we can provide relief from deep-seated pain and discomfort. This therapy combines deep tissue techniques with targeted pressure to provide relief from chronic pain, muscle tension, and associated headaches. It's especially beneficial for those suffering from migraines, repetitive strain injuries, and conditions like fibromyalgia.",
    customizeTitle: "Tailored Treatment",
    customizeDetails:
      "Our adept therapists are experts in identifying and releasing trigger points, ensuring a personalized treatment approach. Each session is adapted to your unique pain points and patterns, complemented with guidance on stretches and practices to prevent future pain.",
    benefitTitle: "Benefits of Pain & Trigger Point Release",
    benefitDetails:
      "Direct Pain Alleviation, Eased Muscle Tension, Headache Relief, Improved Mobility, Reduction in Chronic Pain, Enhanced Muscle Function, Relief from Repetitive Strain Injuries, Decreased Muscle Stiffness",
  };
  

const caution = {
  cautionTitle: "",
  cautionDetails: "",
};

const difference = {
  differenceTitle: "",
  differenceDetails: "",
};
