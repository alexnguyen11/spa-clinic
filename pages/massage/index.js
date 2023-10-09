import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Massage Banner */}
      <div className="bg-yellow-500 text-white text-center py-20 mb-10 rounded-lg">
        <h1 className="text-4xl font-bold mb-2">Our Massage Services</h1>
        <p className="text-lg">
          Relax, rejuvenate, and let us take care of you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        {/* Massage Services List */}
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {massages.map((massage) => (
              <div
                key={massage.id}
                className="p-6 border rounded-lg flex flex-col justify-between"
              >
                <img
                  src="/path-to-your-image.jpg"
                  alt="Massage Type"
                  className="object-cover mb-4 w-full h-48"
                />
                <h2 className="text-2xl font-semibold mb-4">{massage.title}</h2>
                <p className="text-sm mb-4">{massage.desc}</p>
                <div className="mt-auto flex justify-between items-center">
                  <Link href={`/massage/${massage.id}`}>
                    <div className="text-yellow-500 hover:underline">
                      View Details
                    </div>
                  </Link>
                  <Link href="/booking">
                    <div className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-3 rounded-full transition duration-300 ease-in-out">
                      Book Now
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Massage Prices and Add-On Services in the third column */}
        <div className="md:sticky top-10 space-y-10">
          {/* Massage Prices */}
          <div className="p-6 border rounded-lg mb-6 bg-yellow-600 text-gray-800">
            <h3 className="text-2xl font-semibold mb-4">Massage Prices</h3>
            <ul className="space-y-3">
              {massageprices.map((priceItem, index) => (
                <li key={index} className="flex justify-between">
                  <span>{priceItem.duration} mins</span>
                  <span>${priceItem.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Add-On Services */}
          <div className="p-6 border rounded-lg bg-yellow-600 text-gray-800">
            <h3 className="text-2xl font-semibold mb-4">Add-On Services</h3>
            <ul className="space-y-3">
              {addons.map((addon) => (
                <li key={addon.id} className="flex justify-between">
                  <span>{addon.title}</span>
                  <span>${addon.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

const massages = [
  {
    id: "therapeutic-massage",
    title: "Therapeutic Massage Treatment",
    desc: "A personalized massage therapy that addresses individual needs, providing relief from tension and enhancing relaxation.",
  },
  {
    id: "swedish-massage",
    title: "Swedish Massage",
    desc: "A classic massage that uses gentle, flowing strokes to soothe muscles and promote overall relaxation.",
  },
  {
    id: "deep-tissue-massage",
    title: "Deep Tissue Massage",
    desc: "Targets deeper layers of muscles, beneficial for chronic muscle tension and pain.",
  },
  {
    id: "thai-massage",
    title: "Thai Massage",
    desc: "A combination of stretching, pulling, and rocking techniques to relieve tension and enhance flexibility.",
  },
  {
    id: "sports-massage",
    title: "Sports Massage",
    desc: "Focused on athletes and active individuals, it helps prevent injuries and prepares the body for physical activities.",
  },
  {
    id: "reflexology-massage-treatment",
    title: "Reflexology Treatment",
    desc: "A pressure-point massage, focusing primarily on the feet to promote healing in corresponding organs and areas of the body.",
  },
  {
    id: "pain-trigger-point-release",
    title: "Pain / Trigger Point Release",
    desc: "Targets specific areas of tightness and knots, providing relief from localized pain.",
  },
  {
    id: "pre-post-natal-massage",
    title: "Pre / Post Natal Massage",
    desc: "Designed for expectant and new mothers, it helps relieve pregnancy-related discomforts.",
  },
  {
    id: "lymphatic-drainage",
    title: "Lymphatic Drainage",
    desc: "Uses gentle strokes to encourage the movement of lymph fluids and support the immune system.",
  },
  {
    id: "essential-oil-treatment",
    title: "Essential Oil Treatment",
    desc: "A massage combined with aromatic essential oils to enhance emotional well-being.",
  },
  {
    id: "tmj-treatment-injury-rehab",
    title: "TMJ Treatment / Injury Rehab",
    desc: "Addresses the jaw area, beneficial for those with TMJ disorders, and aids in injury recovery.",
  },
  {
    id: "posture-adjustment",
    title: "Posture Adjustment",
    desc: "Tailored to correct imbalances in the posture, resulting from daily habits.",
  },
  {
    id: "facial-treatment",
    title: "Facial Treatment",
    desc: "Rejuvenates the skin, improving facial muscle tone and promoting relaxation.",
  },
  {
    id: "feet-body-scraping-paraffin-wax",
    title: "Feet / Body Scraping / Paraffin Wax",
    desc: "Combines exfoliating, moisturizing, and soothing treatments for feet and body.",
  },
  {
    id: "reiki-energy-treatment",
    title: "Reiki Energy Treatment",
    desc: "A Japanese technique using energy flow to promote healing and stress reduction.",
  },
];


const addons = [
  { id: 1, title: "FACE MASSAGE", price: 20.0 },
  { id: 2, title: "HOT STONE THERAPY", price: 15.0 },
  { id: 3, title: "DYNAMIC CUPPING", price: 20.0 },
  { id: 4, title: "PARAFFIN WAX HANDS & FEET", price: 20.0 },
  { id: 5, title: "FOOT STEAM AND SCRUBS", price: 30.0 },
];

const massageprices = [
  {
    duration: 30,
    price: 50,
  },
  {
    duration: 45,
    price: 70,
  },
  {
    duration: 60,
    price: 90,
  },
  {
    duration: 90,
    price: 130,
  },
  {
    duration: 120,
    price: 170,
  },
];
