import React from "react";
import Link from "next/link";
import { thai } from "@/public/assets/massage/";
import MassageService from "@/components/massage/MassageService";

const THAI = () => {
  return (
    <div>
      <MassageService
        massageService={thaiMassage}
        caution={caution}
        difference={difference}
      />
    </div>
  );
};

export default THAI;

const thaiMassage = {
  massageName: "Thai Massage",
  imagePath: thai,
  massageTitle: "Discover the Power of Table Thai Massage",
  massageDetails:
    "Enjoy relaxing and renewing massage. Thai massage originates from Thailand. Thai massage is nicknamed “yoga for lazy people”. Enjoy this lotion free massage that’s a mixture of yoga like technique stretching and compressions. Great way to decrease tension and even be energized afterwards. Clients are fully clothed. Please wear loose fitting athletic clothing like Adidas or sweats.",
  customizeTitle: "Embracing the Harmony of Thai Massage",
  customizeDetails:
    "Thai massage is a very holistic practice. With the hands of a skilled Thai massage practitioner, one can experience a sublimely rhythmical workout that balances the body’s need for movement and stretching. Each session provides a relaxed state in which excessive worry and stress seem to evaporate.Utilizing pressing techniques, gentle rocking, and various yoga-like stretches, clients are able to relieve body stiffness, gain flexibility and help improve overall balance in major muscle groups. Massage is able to stimulate energy lines which help promote and balance energy throughout the body. Thai massage interacts directly with the muscular, circulatory and nervous systems to enhance your body’s natural healing ability.",
  benefitTitle: "Benefits of Swedish Massage",
  benefitDetails:
    "Lowers stress, Boosts energyn, Relieves headaches, Stimulates circulation, Improves range of motion",
};

const caution = {
  cautionTitle: "Precautions",
  cautionDetails: "Although Thai Massage offers multiple benefits, it may be contraindicated for some populations, including patients with cancer, who are pregnant and those suffering from back injury, such as a herniated disk. Also, if you are weak and infirmed, Thai massage in unlikely to be the right type of therapy for you.",
};

const difference = {
  differenceTitle: "",
  differenceDetails: "",
};
