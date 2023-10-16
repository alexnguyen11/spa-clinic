import React from "react";
import GallerySlide from "./GallerySlide";
import ProgramContainer from "./ProgramContainer";
import AddressContainer from "./AddressContainer";
import TeamContainer from "./TeamContainer";
import ClinicSection from "./ClinicSection";
import WelcomeContainer from "./ServiceContainer";
import CourseSection from "./CourseSection";

const Main = () => {
  return (
    <div className="">
      <GallerySlide />
      <div className="relative">
        <WelcomeContainer />
        <ClinicSection />
      </div>
      <div className="relative">
        <ProgramContainer />
        <CourseSection />
      </div>
      <div className="relative">
        <TeamContainer />
      </div>
      <div className="relative">
        <AddressContainer />
      </div>
    </div>
  );
};

export default Main;
