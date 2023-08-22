import React from "react";

const ServiceBoard = () => {
  return (
    <div className="w-full h-full">
      <div className="max-w-[1400px] mx-auto px-2 py-[10rem] flex flex-col items-center justify-center">
        <div>
          <h1>Our Services</h1>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <p>Massage / Reflexology / Facial</p>
          </div>
          <div>
            <p>Acupuncture</p>
          </div>
          <div>
            <p>Hair Shampoo Spa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBoard;
