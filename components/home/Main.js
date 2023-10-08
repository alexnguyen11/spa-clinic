import React from "react";
import GallerySlide from "./GallerySlide";
import ProgramContainer from "./ProgramContainer";
import AddressContainer from "./AddressContainer";
import TeamContainer from "./TeamContainer";
import SectionCard from "./SectionCard";

const Main = () => {
  return (
    <div className="w-full flex flex-wrap">
      <GallerySlide />
      {/* <SectionCard />
      <SectionCard /> */}
      <ProgramContainer />
      <TeamContainer />
      <AddressContainer />
    </div>
  );
};

export default Main;
