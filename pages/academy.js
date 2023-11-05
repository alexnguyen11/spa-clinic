import React from "react";
import AcademyBanner from "@/src/components/academy/AcademyBanner";
import ContentBoard from "@/src/components/academy/ContentBoard";
import CourseInfo from "@/src/components/academy/CourseInfo";
import PromoCard from "@/src/components/academy/PromoCard";

const academy = () => {
  return (
    <div className="w-full">
      <AcademyBanner />
      <CourseInfo />
      <div className="relative">
        <PromoCard />
      </div>
      <ContentBoard />
    </div>
  );
};

export default academy;
