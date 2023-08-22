import React from "react";
import mapImage from "@/public/assets/map.png"; // Replace with your actual map image path
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

const AddressCard = () => {
  return (
    <div className="w-full h-full">
      <div className="max-w-[1400px] mx-auto bg-white  py-[10rem] my-10">
        <div className="w-full flex flex-wrap items-center justify-center">
          <div className="my-10">
            <h1 className="tracking widest uppercase text-2xl">Our Location</h1>
          </div>
          <div className="md:flex my-10  justify-center">
            {/* Map Image */}
            <div className="w-2/3 pr-4">
              <Image
                src={mapImage}
                alt="Map"
                layout="responsive"
                width={400}
                height={300}
              />
            </div>
            {/* Description */}
            <div className="w-1/3 mx-10">
              <h2 className="text-xl font-semibold mb-2">
                WE’RE LOCATED 5 MINUTES FROM THE C-TRAIN CHINOOK STATION
              </h2>
              <p className="text-gray-600 tracking-wide">
                Calgary Massage Clinic is conveniently located near Health care
                professional Centre — we’re just a short drive away. Our
                location close to Chinook Shopping mall is great because we’re
                able to work not only with local college students, but with the
                staff administration and other employees, many of whom have been
                visiting our office for years. Our therapists have also had
                years of experience working with athletic teams, helping
                athletes recover from the stress of inter-collegiate sports.
                Whether you’re a student, faculty or employee, we can create the
                best massage therapy approach for your body.
              </p>
              <p className="text-gray-700 font-base mt-5 tracking-wide">
                <LocationOnIcon /> 5717 3 St SW, Calgary, AB T2H 0J6
              </p>
              <p className="text-gray-700 font-base mt-2">
                <PhoneIcon /> 587-917-9758
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
