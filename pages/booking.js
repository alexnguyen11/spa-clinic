import PersonIcon from "@mui/icons-material/Person";
import CallIcon from "@mui/icons-material/Call";

const booking = () => {
  return (
    <div className="w-full h-full bg-stone-100">
      <div className="lg:h-screen font-poppins flex flex-col items-center justify-center">
        <h1 className="my-[4rem] text-4xl tracking-wider uppercase font-light">
          Book an Appointment
        </h1>
        <div className="p-[3rem] bg-gradient-to-r from-emerald-400 to-cyan-400 text-white text-center lg:w-1/2 my-10">
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
        <div className="p-[3rem] bg-gradient-to-r from-amber-500 to-pink-500 text-white text-center lg:w-1/2 my-10 ">
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
      </div>
    </div>
  );
};

export default booking;
