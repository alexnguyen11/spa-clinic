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
      <div className="relative">
        <GallerySlide />
      </div>
      <div className="relative">
        <WelcomeContainer />
      </div>
      <div className="relative">
        <ClinicSection/>
      </div>
      <div className="relative">
        <ProgramContainer />
        <CourseSection/>
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
