import MassageService from "@/src/components/massage/MassageService";
import { sport } from "@/public/assets/massage";

const SPORT = () => {
  return (
    <div>
      <MassageService
        massageService={sportMassage}
        caution={caution}
        difference={difference}
      />
    </div>
  );
};

const sportMassage = {
  massageName: "Sports Massage",
  imagePath: sport,
  massageTitle: "Sports Massage",
  massageDetails:
    "An athlete is a person who participates in sports either as an amateur or a professional. Often the activity involves repetitive use of one group of muscles more than others, which may result in hypertrophy, changes in strength patterns or changes in connective tissue formation and compensation patterns in the rest of the body. Regular massage allows the body to function with less restriction and accelerates recovery time.",
  customizeTitle: "Customized Sessions",
  customizeDetails:
    "Our highly trained therapists are skilled in injury rehab and pain relief and offer a wide range of massage modalities with their unique, personal styles and special techniques. Your session will always be customized for your individual needs and lifestyle modifications or follow-up care with other modalities or practitioners.",
  benefitTitle:
    "There are typically five time periods when sports massage is appropriate:",
  benefitDetails:
    "Pre-event, Inter-event, Post-event, Rehabilitation, Maintenance",
};

const caution = {
  cautionTitle: "Remediation",
  cautionDetails:
    "Injury-Specific Protocols – Massage would be utilized to address specific issues such as restricted range of motion, chronic pain, and muscle/tendon injuries. These protocols would be designed to address the athlete’s individual complaints and reduce the athlete’s recovery time. The goal would be to get the athlete back to their peak performance level as quickly as possible.",
};

const difference = {
  differenceTitle: "Maintenance Massage",
  differenceDetails:
    "This type of massage session would be customized for the specific athlete. Any problem areas would be addressed. The increased blood flow to the muscle helps keep the tissue healthy, which in turn would reduce the occurrence of injuries. The purpose of these protocols would be to keep the athlete in the best physical condition possible between games or seasons. This service could also be provided on-site if that is deemed most efficient use of the athlete’s time.",
};

export default SPORT;
