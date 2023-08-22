import Link from "next/link";

const Banner = () => {
  return (
    <div className="w-full">
      <div className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-500 via-purple-500 to-blue-500 text-white p-4 flex flex-col items-center justify-center">
        <div className="container mx-auto flex items-center justify-center">
          <div className="text-center tracking-wider uppercase">
            <div>
              <h2 className="text-[2rem] font-extrabold my-8 text-yellow-400">SPECIAL OFFER</h2>
              <p className="text-2xl my-7"> <span className="font-bold text-blue-500">500 CAD {" "}</span>
                  for <span className="font-bold text-blue-500">6</span> premium package
              </p>
              <p className="text-base mb-4 font-light">
                Keep your hair soft, shiny, and vibrant with this excellent hair
                care service
              </p>
              <p className="text-base mb-4 font-light">
                Contact us now to book your appointment and achieve heavenly
                hair
              </p>
            </div>
          </div>
        </div>
        <Link href="/booking">
        <button className="my-6 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
          Book Now
        </button>{" "}
      </Link>
      </div>
    </div>
  );
};

export default Banner;
