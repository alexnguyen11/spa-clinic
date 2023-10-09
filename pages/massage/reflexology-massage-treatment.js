import React from "react";
import Link from "next/link";

const REFLEXOLOGY = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-6 px-4 md:px-12 lg:px-20">
      {/* Header */}
      <div className="text-center py-4 md:py-8 mb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">
          Reflexology Massage
        </h1>
      </div>

      {/* Massage Image */}
      <div className="mb-8">
        <img
          src="/"
          alt="Swedish Massage"
          className="w-full object-cover rounded-md h-56 md:h-96"
        />
      </div>

      {/* Massage Description */}
      <div className="mb-10 p-4 md:p-6 border rounded-lg bg-white shadow-lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-yellow-600 mb-4 md:mb-6">
          What’s the difference between Reflexology and Massage?
        </h2>
        <p className="text-base md:text-lg mb-4 md:mb-6">
          Massage is the systematic manipulation of the soft tissues of the
          body, using specific techniques (for example, tapping, kneading,
          stroking, and friction) to relax the muscles.
        </p>
        <p className="text-base md:text-lg mb-4 md:mb-6">
          Reflexology focuses on reflex maps of points and areas of the body in
          the feet, hands, and ears using unique micromovement techniques, such
          as thumb or finger walking, with the goal of creating a response
          throughout the body. In short: Massage therapists work “from the
          outside in,” manipulating specific muscle groups or fascia to release
          tension. Reflexology practitioners see themselves as working “from the
          inside out”—stimulating the nervous system to release tension.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-yellow-600 mb-4 md:mb-6">
          What does Reflexology do?
        </h2>
        <p className="text-base md:text-lg mb-4 md:mb-6">
          Although reflexology is not used to diagnose or cure disease, millions
          of people around the world use it to complement other treatments when
          addressing conditions like Anxiety, Asthma, Cancer treatment,
          Cardiovascular issues, Diabetes, Headaches, Kidney function, PMS, and
          sinusitis…
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-yellow-600 mb-4 md:mb-6">
          Discover the Power of Foot Reflexology Massage
        </h2>
        <p className="text-base md:text-lg mb-4 md:mb-6">
          Is commonly explained as the scientific theory that maps out the
          reflexes from the hands and feet to all the organs and the rest of the
          body. By applying acupressure and massage techniques to the feet and
          hands, the client can experience relaxation, pain reduction and the
          body’s ability to heal itself. Be sure to communicate your pain levels
          with your massage therapist during your treatment. It is also a good
          idea to rest after receiving the reflexology massage.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-yellow-600 mb-4 md:mb-6">
          Scheduling follow-up sessions
        </h2>
        <p className="text-base md:text-lg mb-4 md:mb-6">
          The number of sessions varies and is determined by the client’s health
          and reasons for seeking reflexology. But in general, results from
          reflexology are often subtle and are cumulative. Thus, you are more
          likely to see greater benefits from regular sessions (for example,
          once a week for six weeks) than if you had a session once every six
          months.
        </p>
        <p className="text-base md:text-lg mb-4 md:mb-6">
          If you are dealing with a specific illness or condition, you may need
          to have more frequent sessions. A general recommendation might be to
          begin with a session every week for 6-8 weeks, followed by a “tune-up”
          every four weeks.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-yellow-600 mb-4 md:mb-6">
          Customized Sessions
        </h2>
        <p className="text-base md:text-lg mb-4 md:mb-6">
          Our highly trained therapists are skilled in injury rehab and pain
          relief and offer a wide range of massage modalities with their unique,
          personal styles and special techniques. Your session will always be
          customized for your individual needs and lifestyle modifications or
          follow-up care with other modalities or practitioners.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-yellow-600 mb-4 md:mb-6">
          Benefits of Reflexology Massage
        </h2>
        <ul className="list-disc list-inside text-base md:text-lg mb-6 pl-4">
          <li className="mb-2">Helps Control Blood Pressure</li>
          <li className="mb-2">Improves Nerve Sensitivity</li>
          <li className="mb-2">Improves Energy Levels</li>
          <li className="mb-2">Improves Blood Circulation</li>
          <li className="mb-2">Helps Promote Sleep</li>
          <li className="mb-2">Improves Liver Function</li>
        </ul>
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

export default REFLEXOLOGY;
