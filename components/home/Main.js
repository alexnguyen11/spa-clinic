import React from "react";
import GallerySlide from "./GallerySlide";
import ProgramBoard from "./ProgramBoard";
import AddressCard from "./AddressCard";
import TeamContainer from "./TeamContainer";
import PriceBoard from "./ServiceBoard";
import SectionCard from "./SectionCard";

const Main = () => {
  return (
    <div className="w-full flex flex-wrap">
      <GallerySlide />
      <SectionCard />
      <ProgramBoard />
      <TeamContainer />
      <AddressCard />
    </div>
  );
};

export default Main;