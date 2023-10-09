import React from "react";
import Link from "next/link";

const THAI = () => {
  const benefitsArray = thai.benefitDetails.split(", ");
  return (
    <div className="bg-gray-100 min-h-screen py-6 px-4 md:px-12 lg:px-20">
      {/* Header */}
      <div className="text-center py-4 md:py-8 mb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">
          {thai.massageName}
        </h1>
      </div>

      {/* Massage Image */}
      <div className="mb-8">
        <img
          src={thai.imagePath}
          alt="Swedish Massage"
          className="w-full object-cover rounded-md h-56 md:h-96"
        />
      </div>

      {/* Massage Description */}
      <div className="mb-10 p-4 md:p-6 border rounded-lg bg-white shadow-lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-yellow-600 mb-4 md:mb-6">
          {thai.massageTitle}
        </h2>
        <p className="text-base md:text-lg mb-4 md:mb-6">
          {thai.massageDetails}
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-yellow-600 mb-4 md:mb-6">
          {thai.customizeTitle}
        </h2>
        <p className="text-base md:text-lg mb-4 md:mb-6">
          {thai.customizeDetails}
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-yellow-600 mb-4 md:mb-6">
          {thai.benefitTitle}
        </h2>
        <ul className="list-disc list-inside text-base md:text-lg mb-6 pl-4">
          {benefitsArray.map((benefit, index) => (
            <li key={index} className="mb-2">
              {benefit}
            </li>
          ))}
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold text-yellow-600 mb-4 md:mb-6">
          Precautions
        </h2>
        <p className="text-base md:text-lg mb-4 md:mb-6">
          Although Thai Massage offers multiple benefits, it may be
          contraindicated for some populations, including patients with cancer,
          who are pregnant and those suffering from back injury, such as a
          herniated disk. Also, if you are weak and infirmed, Thai massage in
          unlikely to be the right type of therapy for you.
        </p>
        <p className="font-semibold text-lg mb-4 md:mb-6">
          Looking to take control of your health? We can Help!
        </p>
        <div className="text-center">
          <Link href="/booking">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 md:px-6 rounded-full transition duration-300 ease-in-out cursor-pointer mb-2 md:mb-4 shadow-md hover:shadow-lg">
              Book Now
            </button>
          </Link>

          <p className="mt-2 text-lg md:text-xl text-yellow-600">
            Therapists Available 7 Days A Week by Appointment
          </p>
        </div>
      </div>
    </div>
  );
};

export default THAI;

const thai = {
  massageName: "Thai Massage",
  imagePath: "",
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
