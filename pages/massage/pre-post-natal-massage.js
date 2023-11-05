import MassageService from "@/src/components/massage/MassageService";
import { prepostnatal } from "@/public/assets/massage";

const PREPOSTNATAL = () => {
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

const painTriggerPointRelease = {
  massageName: "Pre / Post Natal Massage",
  imagePath: prepostnatal,
  massageTitle: "Discover the Power of Prenatal and Infant Massage",
  massageDetails:
    "At Calgary Massage Clinic, we are pleased to offer prenatal and infant massage services. Prenatal Massage is beneficial for both mother and baby, while Infant Massage is ideal for strengthening the parent-child bond.",
  customizeTitle: "Specialized Sessions for Mothers",
  customizeDetails:
    "Our specially trained therapists understand the unique needs of expectant and new mothers. With a focus on providing relief and relaxation during this transformative time, we offer tailored Pre and Post Natal massage sessions. These massages are designed to cater specifically to the changes a woman’s body experiences during and after pregnancy. Every session is adapted to your individual needs, ensuring comfort and safety for both mother and baby. We also offer guidance on self-care and relaxation techniques to complement the massage and enhance overall well-being during this beautiful phase of life.",
  benefitTitle: "Benefits of Pain & Trigger Point Release",
  benefitDetails:
    "Neck Pain, Headaches, Mid-back (Thoracic) and Chest Pain, Rib and Shoulder Girdle Pain, Hip and Pubic Bone Pain, Carpal Tunnel Syndrome, Lower Leg Cramps, Plantar Fasciitis",
};

const caution = {
  cautionTitle: "Why Prenatal Massage?",
  cautionDetails:
    "Prenatal massage is a specialized therapeutic treatment tailored to the unique needs of expectant mothers. As the body undergoes significant changes during pregnancy, discomforts such as backaches, swollen ankles, and muscle tension can become increasingly prevalent. Prenatal massage offers a gentle and holistic approach to alleviate these discomforts, promoting relaxation and increasing circulation. Beyond the physical relief, it also provides emotional support, creating a nurturing environment for both mother and baby. The gentle strokes and specialized techniques used not only soothe tense muscles but also reduce stress and anxiety, ensuring that the mother feels rejuvenated and better equipped to handle the demands of pregnancy.",
};

const difference = {
  differenceTitle: "Why Infant Massage?",
  differenceDetails:
    "Infant massage is a beautiful way to strengthen the bond between a parent and their newborn. It encompasses gentle, rhythmic strokes designed to soothe and comfort the baby, aiding in relaxation and promoting better sleep. But the benefits of infant massage extend beyond just relaxation. Regular sessions can aid in digestion, help relieve colic, and even enhance the baby's developmental milestones. The tactile stimulation provided through infant massage plays a crucial role in the baby's physical and emotional development. Moreover, the dedicated one-on-one time during massage sessions fosters a deep sense of connection and trust, aiding in the formation of secure attachments which are vital for the child's long-term well-being and emotional health.",
};

export default PREPOSTNATAL;
