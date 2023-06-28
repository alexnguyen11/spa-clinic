import React from "react";
import ServiceCard from "@/components/service/ServiceCard";

const index = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1400px]">
        <div className="w-full md:flex flex-col  justify-center items-center">
          <div>
            <h1>Massage</h1>
          </div>
          <div>
            <ServiceCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
