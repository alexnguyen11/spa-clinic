import React from "react";
import {
  Spa,
  MonitorHeart,
  FitnessCenter,
  HeartBroken,
  CardGiftcardOutlined,
  CalendarMonthOutlined,
} from "@mui/icons-material";
import Link from "next/link";

const services = [
  {
    icon: Spa,
    label: "RELAXATION MASSAGE",
    color: "bg-red-500",
    url: "/massage/relaxation-massage",
  },
  {
    icon: MonitorHeart,
    label: "MEDICAL MASSAGE",
    color: "bg-yellow-400",
    url: "/massage/medical-massage",
  },
  {
    icon: FitnessCenter,
    label: "SPORT MASSAGE",
    color: "bg-green-500",
    url: "/massage/sport-massage",
  },
  {
    icon: HeartBroken,
    label: "COMMON INJURIES",
    color: "bg-purple-500",
    url: "/massage/repetitive-strain-injury-massage",
  },
  {
    icon: CardGiftcardOutlined,
    label: "GIFT CERTIFICATES",
    color: "bg-blue-500",
    url: "/gifts",
  },
  {
    icon: CalendarMonthOutlined,
    label: "SCHEDULE NOW",
    color: "bg-gray-500",
    url: "/booking",
  },

  // Add other services as needed
];

const WelcomeContainer = () => {
  return (
    <div className="sm:p-16 xs:p-8 px-6 py-12 relative ">
      <div className="flex flex-col items-center justify-center">
        {/* Header */}
        <div className="md:text-center mb-8">
          <p className="text-sm font-medium text-gray-500 uppercase mb-2">
            WELCOME TO TAI CHI HEALTH & BEAUTY ACADEMY CENTRE
          </p>
          <h1 className="text-base md:text-4xl font-bold mb-4 items-start">
            Your Massage Therapy and Acupuncture Clinic
          </h1>
        </div>

        {/* Services */}
        <div className="grid grid-cols-2 gap-4 md:flex flex-wrap md:gap-[4rem] justify-center items-center">
          {services.map((service, index) => (
            <Link href={service.url} key={index}>
              <div
                className={`flex flex-col items-center justify-center p-4 md:p-6 rounded-md shadow-lg ${service.color} h-[100px] md:h-[250px] w-[120px] md:w-[240px] cursor-pointer  transition transform hover:scale-105 duration-300`}
              >
                <service.icon className="mb-2 md:mb-10 text-white text-[1.5rem] md:text-[3rem]" />
                <h3 className="text-[0.7rem] md:text-[1rem] font-semibold text-white mb-2 text-center">
                  {service.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomeContainer;
