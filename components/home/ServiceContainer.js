import { useState, useEffect } from "react";
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
    color: "text-white",
    url: "/massage/relaxation-massage",
  },
  {
    icon: MonitorHeart,
    label: "MEDICAL MASSAGE",
    color: "text-white",
    url: "/massage/medical-massage-group",
  },
  {
    icon: FitnessCenter,
    label: "SPORT MASSAGE",
    color: "text-white",
    url: "/massage/sport-massage-group",
  },
  {
    icon: HeartBroken,
    label: "COMMON INJURIES",
    color: "text-white",
    url: "/massage/repetitive-strain-injury-massage",
  },
  {
    icon: CardGiftcardOutlined,
    label: "GIFT CERTIFICATES",
    color: "text-white",
    url: "/shop/gifts",
  },
  {
    icon: CalendarMonthOutlined,
    label: "SCHEDULE NOW",
    color: "text-white",
    url: "/booking",
  },
];

const ServiceIcon = ({ IconComponent, color, isMediumScreen }) => {
  const iconSize = isMediumScreen ? "4rem" : "2rem"; // Adjust the sizes as needed

  return <IconComponent style={{ fontSize: iconSize }} className={color} />;
};

const WelcomeContainer = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        // 768px is the default breakpoint for `md:` in TailwindCSS
        setIsMediumScreen(true);
      } else {
        setIsMediumScreen(false);
      }
    };

    handleResize(); // call once initially

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="p-6 sm:p-8 md:p-12 lg:p-16 mt-10 relative bg-gray-900">
      <div className="flex flex-col items-center justify-center">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-xs sm:text-sm md:text-base font-medium text-gray-500 uppercase mb-2 tracking-wider">
           TAI CHI HEALTH & BEAUTY ACADEMY CENTRE
          </p>
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text5xl font-extrabold mb-6 text-yellow-800">
            Your Massage Therapy and Acupuncture Clinic
          </h1>
        </div>

        {/* Services */}
        <div className="grid grid-cols-2 gap-6 md:flex flex-wrap md:gap-[5rem] justify-center items-center">
          {services.map((service, index) => (
            <Link href={service.url} key={index}>
              <div className="flex flex-col items-center justify-center bg-yellow-600 p-2 md:p-4 rounded-full shadow-md hover:shadow-xl h-[100px] md:h-[220px] w-[100px] md:w-[220px] cursor-pointer transition-all transform hover:scale-105 duration-300 ">
                <ServiceIcon
                  IconComponent={service.icon}
                  color={service.color}
                  isMediumScreen={isMediumScreen}
                />
                <h3 className="text-[0.5rem] md:text-[1.1rem] font-semibold text-white mb-2 mt-3 md:mt-5 text-center">
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
