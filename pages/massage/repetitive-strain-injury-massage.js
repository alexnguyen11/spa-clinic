import React from "react";

const INJURIES = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6 md:px-32">
      <div className="grid md:grid-cols-3 gap-10">
        {/* Left Column - Descriptions */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-md">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Injury Massage</h2>
            <p>
              Repetitive strain injuries (RSI) are a family of injuries
              affecting tendons, tendon sheaths, muscles, nerves and joints.
              They occur over time and cause persistent or recurring pains most
              commonly in the neck, shoulders, forearms, hands, wrists, elbows
              and lower limbs. Most common RSI include: Tendonitis, Golfer’s
              Elbow, Trigger Thumb, Carpel Tunnel, Thoracic Outlet Syndrome
              (TOS) and Writer’s Cramp. People who experience RSI experience
              symptoms such as: numbness, tingling, burning sensations, pain,
              dull ache, dry, shiny palm, clumsiness of the hands (loss of
              ability to grasp items, impaired thumb and finger dexterity),
              swelling around the wrist and hand, aches and pains which may be
              strongest at night.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Customized Sessions</h2>
            <p>
              Our highly trained therapists are skilled in injury rehab and pain
              relief and offer a wide range of massage modalities with their
              unique, personal styles and special techniques. Your session will
              always be customized for your individual needs and recommendations
              may be given to include stretches, posture tips, lifestyle
              modifications or follow-up care with other modalities or
              practitioners.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Expertise in Injury Treatment
            </h2>
            <p>
              Our skilled team of massage therapists are highly trained in
              advanced soft-tissue release techniques to help you recover from
              an injury. We apply and blend modalities like Myofascial Release,
              Neuromuscular Massage Therapy, Trigger Point Therapy and Active
              Release Techniques best suited for your injury.
            </p>
          </section>
        </div>

        {/* Right Column - List of Common Injuries */}
        <div className="bg-yellow-600 text-white p-6 rounded-xl shadow-md space-y-3">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">
            Common Injuries We Treat
          </h2>
          <ul className="space-y-2">
            <li>✔️ Tmj dysfunction</li>
            <li>✔️ Neck pain & migraines</li>
            <li>✔️ Shoulder injuries</li>
            <li>✔️ Carpal tunnel & thoracic outlet (tos)</li>
            <li>✔️ Back pain</li>
            <li>✔️ Scoliosis</li>
            <li>✔️ Sciatica</li>
            <li>✔️ Leg pain</li>
            <li>✔️ Knee pain</li>
            <li>✔️ Plantar fasciitis</li>
          </ul>
        </div>

        <div className="md:col-span-3 bg-white p-8 rounded-xl shadow-lg mb-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-4">Booking Details</h1>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-lg font-semibold">
                <div className="mb-2">
                  <span className="mr-2">30 minutes:</span> $75.00
                </div>
                <div>
                  <span className="mr-2">60 minutes:</span> $120.00
                </div>
              </div>
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded mt-4 md:mt-0 transition duration-300">
                Book Now
              </button>
            </div>
          </div>
          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-4">SERVICES ADD-ON</h2>
            <ul className="space-y-2">
              <li className="text-gray-700">
                FACE MASSAGE: <span className="font-semibold">$20.00</span>
              </li>
              <li className="text-gray-700">
                HOT STONE THERAPY: <span className="font-semibold">$15.00</span>
              </li>
              <li className="text-gray-700">
                DYNAMIC CUPPING: <span className="font-semibold">$20.00</span>
              </li>
              <li className="text-gray-700">
                PARAFFIN WAX HANDS & FEET:{" "}
                <span className="font-semibold">$20.00</span>
              </li>
              <li className="text-gray-700">
                FOOT STEAM AND SCRUBS:{" "}
                <span className="font-semibold">$30.00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default INJURIES;
