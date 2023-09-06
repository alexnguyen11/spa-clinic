import PersonIcon from "@mui/icons-material/Person";
import CallIcon from "@mui/icons-material/Call";
import BusinessIcon from "@mui/icons-material/Business";
import Link from "next/link";

const booking = () => {
  return (
    <div className="w-full h-full bg-stone-100">
      <div className=" font-poppins flex flex-col items-center justify-center">
        <h1 className="my-[4rem] text-4xl tracking-wider uppercase font-light">
          Book an Appointment
        </h1>
        <div
          id="massage"
          className="p-[3rem] bg-gradient-to-r from-emerald-400 to-cyan-400 text-white text-center lg:w-1/2 my-10"
        >
          <h1 className="text-3xl font-bold">Massage Therapy</h1>
          <p className="mt-4 text-lg">
            Relax and rejuvenate with our massage services.
          </p>
          <a
            href="https://taichimassagetherapy.janeapp.com/#/list"
            target="_blank"
          >
            <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
              Book Now
            </button>
          </a>
        </div>
        <div
          id="spa"
          className="p-[3rem] bg-gradient-to-r from-amber-500 to-pink-500 text-white text-center lg:w-1/2 my-10 "
        >
          <h1 className="text-3xl font-bold">Hair Shampoo Spa</h1>
          <p className="mt-4 text-lg">
            Indulge in our luxurious hair shampoo spa treatments.
          </p>
          <div className="mt-6">
            <p className="text-xl font-semibold">Contact to Book</p>
            <p className="text-lg my-2">
              <PersonIcon /> Hanh
            </p>
            <p className="text-lg">
              <CallIcon /> 403-703-3883
            </p>
          </div>
        </div>
        <div
          id="course_register"
          className="p-[3rem] bg-gradient-to-r from-emerald-500 to-emerald-900 text-white text-center lg:w-1/2 my-10 mb-[5rem]"
        >
          <h1 className="text-3xl font-bold ">
            Training Course Registration
          </h1>
          <p className="mt-4 text-lg">
            Join our training courses to begin your career
          </p>
          <div className="mt-6">
            <p className="text-lg my-2">
              <PersonIcon /> Vincent Dang
            </p>

            <p className="text-lg">
              <CallIcon /> 408-800-062
            </p>
            <a
              href="https://www.google.com/maps/place/Taichi+Massage+%26+Therapy/@51.0035456,-114.0726939,17z/data=!3m1!4b1!4m6!3m5!1s0x53717180f682ba31:0xe0bbd1cf4e8cf58c!8m2!3d51.0035456!4d-114.070119!16s%2Fg%2F11pwx141q3?entry=ttu"
              target="_blank"
            >
              <p className="text-lg my-2">
                {" "}
                <BusinessIcon className="mr-2" />
                5717 3 St SW, Calgary, AB T2H 0J6
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default booking;
