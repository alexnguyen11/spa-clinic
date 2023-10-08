import React from "react";
import AcademyBanner from "@/components/academy/AcademyBanner";
import ContentBoard from "@/components/academy/ContentBoard";
import CourseInfo from "@/components/academy/CourseInfo";
import PromoCard from "@/components/academy/PromoCard";

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
