import React from "react";
import medicalMassagImg from "@/public/assets/home/medical_massage.jpeg";
import Image from "next/image";

const SectionCard = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full bg-stone-100">
        <div className=" mx-auto py-12 mt-[10rem]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-4">
                CUSTOM MASSAGE PLANS FOR INJURY REHAB AND PAIN RELIEF
              </h2>

              <div className="flex flex-row justify-center">
                <div className="flex items-center justify-center mb-6 w-[1200px] h-[300px] overflow-hidden">
                  <Image
                    src={medicalMassagImg} // Replace with actual image path
                    alt="Massage Image"
                  />
                </div>

                <div className="mx-10">
                  <p className="mb-4">
                    MEDICAL MASSAGE COMPLEMENTS THE TREATMENT PLAN OF YOUR
                    DOCTOR OR CHIROPRACTOR
                  </p>
                  <p className="mb-6">
                    Our trained medical massage therapists combine the
                    scientific application of properly applied pressure, gentle
                    ranges of motion and stretches for the purpose of relieving
                    pain, normalizing muscle tone, restoring postural balance
                    and achieving restorative benefits for the entire body.
                  </p>
                  <p className="mb-6">
                    <strong>Conditions we address:</strong>
                    <br />
                    CHRONIC PAIN | OLD INJURIES | ACUTE TRAUMA | MYOFASCIAL PAIN
                    | NERVE PAIN | BACK PAIN and SCIATICA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
