import React from "react";
import GallerySlide from "./GallerySlide";
import ProgramBoard from "./ProgramBoard";
import AddressCard from "./AddressCard";

const Main = () => {
  return (
    <div className="w-full flex flex-wrap">
      <GallerySlide />
      <ProgramBoard />
      <AddressCard />
    </div>
  );
};

export default Main;
