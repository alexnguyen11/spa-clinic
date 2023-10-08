import React from "react";
import mapImage from "@/public/assets/map.png"; // Replace with your actual map image path
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

const AddressContainer = () => {
  return (
    <div className="sm:p-16 xs:p-8 px-6 py-12 relative">
      <div className=" bg-white ">
        <div className="w-full flex flex-wrap items-center justify-center">
          <div className="my-5 md:my-10">
            <h1 className="tracking-widest uppercase text-2xl md:text-[40px] font-bold">Our Location</h1>
          </div>
          <div className="md:flex m-10  justify-center">
            {/* Map Image */}
            <div className="pr-4">
              <Image
                src={mapImage}
                alt="Map"
                layout="responsive"
                width={400}
                height={300}
              />
            </div>
            {/* Description */}
            <div className="max-w-[25rem] md:mx-10 my-4">
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
              <a
                href="https://www.google.com/maps/place/Taichi+Massage+%26+Therapy/@51.0035456,-114.0726939,17z/data=!3m1!4b1!4m6!3m5!1s0x53717180f682ba31:0xe0bbd1cf4e8cf58c!8m2!3d51.0035456!4d-114.070119!16s%2Fg%2F11pwx141q3?entry=ttu"
                target="_blank"
                className="hover:underline"
              >
                <p className="text-gray-700 font-base mt-5 tracking-wide hover:underline">
                  <LocationOnIcon /> 5717 3 St SW, Calgary, AB T2H 0J6
                </p>
              </a>

              <a href="tel:5879179758" className="hover:underline">
                {" "}
                <p className="text-gray-700 font-base mt-2">
                  <PhoneIcon /> 587-917-9758
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressContainer;
