import React from "react";
import mapImage from "@/public/assets/map.png";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

const AddressContainer = () => {
  return (
    <div className="p-6 sm:p-8 md:p-12 lg:p-16 bg-gray-50">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="text-center mb-10">
          <h1 className=" text-2xl md:text-4xl font-bold text-gray-800">Our Location</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Map Image */}
          <div className="order-2 md:order-1">
            <Image src={mapImage} alt="Map" layout="responsive" width={500} height={375} className="rounded-lg" />
          </div>

          {/* Description */}
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-800">
              WE’RE LOCATED 5 MINUTES FROM THE C-TRAIN CHINOOK STATION
            </h2>
            <p className="text-gray-600 tracking-wide leading-relaxed">
              Calgary Massage Clinic is conveniently located near Health care professional Centre — we’re just a short drive away. Our location close to Chinook Shopping mall is great because we’re able to work not only with local college students, but with the staff administration and other employees, many of whom have been visiting our office for years. Our therapists have also had years of experience working with athletic teams, helping athletes recover from the stress of inter-collegiate sports. Whether you’re a student, faculty or employee, we can create the best massage therapy approach for your body.
            </p>
            <div className="space-y-3">
              <a href="https://www.google.com/maps/place/Taichi+Massage+%26+Therapy/@51.0035456,-114.0726939,17z/data=!3m1!4b1!4m6!3m5!1s0x53717180f682ba31:0xe0bbd1cf4e8cf58c!8m2!3d51.0035456!4d-114.070119!16s%2Fg%2F11pwx141q3?entry=ttu" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:underline hover:text-blue-600 transition duration-300">
                <LocationOnIcon className="mr-2" /> 5717 3 St SW, Calgary, AB T2H 0J6
              </a>
              <a href="tel:5879179758" className="flex items-center text-gray-700 hover:underline hover:text-blue-600 transition duration-300">
                <PhoneIcon className="mr-2" /> 587-917-9758
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressContainer;
