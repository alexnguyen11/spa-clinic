import MassageService from "@/src/components/massage/MassageService";
import {medicalmassage} from "@/public/assets/massage";

const MEDICAL = () => {
  return (
    <div>
      <MassageService
        massageService={mva}
        caution={caution}
        difference={difference}
      />
    </div>
  );
};

export default MEDICAL;

const mva = {
    massageName: "MOTOR VEHICLE ACCIDENT REHABILITATION (MVA)",
    imagePath: medicalmassage,  
    massageTitle: "MOTOR VEHICLE ACCIDENT REHABILITATION (MVA)",
    massageDetails:
      "If you have been injured in a motor vehicle accident (MVA), you may have suffered soft tissue injuries to your neck and back. Our qualified and registered massage therapists will perform a thorough assessment of your ailments and set up a treatment plan to suit your specific needs so that you may get back to a healthier, more active, and better quality of life. Please provide some details of your MVA when making your appointment so that we may advise and schedule you accordingly. It combines the scientific application of properly applied pressure, gentle ranges of motion and stretches for the purpose of relieving pain, normalizing muscle tone, restoring postural balance and achieving restorative benefits for the entire body thus eliminating the cause of a person's acute to chronic myofascial pain and dysfunction. To achieve these goals, many modalities of soft tissue manipulation are utilized.",
    customizeTitle: "Tailored Treatment",
    customizeDetails:
      "Our adept therapists are experts in identifying and releasing trigger points, ensuring a personalized treatment approach. Each session is adapted to your unique pain points and patterns, complemented with guidance on stretches and practices to prevent future pain.",
    benefitTitle: "Benefits of MVA",
    benefitDetails:
      "Accelerated Recovery Post-Accident, Targeted Pain Management, Restored Range of Motion, Reduced Inflammation and Swelling, Mitigation of Whiplash Symptoms, Corrected Postural Imbalances, Rehabilitation of Strained Muscles, Mental and Emotional Support through Healing",
  };
  

const caution = {
  cautionTitle: "Three-Session Approach to Advanced Therapeutic Modalities",
  cautionDetails: "These modalities require specialized training in post graduate techniques and are best utilized initially by a commitment to a three treatment \"plan\" to redirect the tissue dysfunction. Most often the client will experience significant changes at this point and will be presented with options for how best to proceed with their individual needs.",
};

const difference = {
  differenceTitle: "",
  differenceDetails: "",
};
