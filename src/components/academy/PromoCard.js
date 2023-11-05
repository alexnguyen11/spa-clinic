import Link from "next/link";

const PromoCard = () => {
  return (
    <div
      id="discounts"
      className="sm:p-16 xs:p-8 px-6 py-12 relative z-10 bg-gray-900 shadow-xl text-white"
    >
      <div className="w-full flex flex-col items-center justify-center">
        {/* Header */}
        <h1 className="mb-4 uppercase md:text-6xl text-4xl font-extrabold">
          special offer
        </h1>
        <p className="mb-6 uppercase text-xl font-medium">
          Don't miss out on our limited-time promotion
        </p>

        <div className="flex flex-col md:flex-row md:gap-8 md:my-5">
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-7">
            <div className="text-center mb-4 md:mb-0">
              <p className="text-4xl font-extrabold mb-2">30%</p>
              <p className="uppercase bg-white text-blue-500 px-4 py-2 rounded">
                Any 3 courses
              </p>
            </div>
            <div className="text-center mb-4 md:mb-0">
              <p className="text-4xl font-extrabold mb-2">40%</p>
              <p className="uppercase bg-white text-blue-500 px-4 py-2 rounded">
                Any 4 courses
              </p>
            </div>
            <div className="text-center mb-4 md:mb-0">
              <p className="text-4xl font-extrabold mb-2">50%</p>
              <p className="uppercase bg-white text-blue-500 px-4 py-2 rounded">
                Any 5 courses
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row text-center items-center justify-center md:gap-8">
            <div className="w-1 h-16 bg-white my-4"></div>
            <div className="mb-6 bg-white text-blue-500 p-4 rounded">
              <span className="font-extrabold text-4xl">70% off</span>
              <span className="block uppercase">for all courses</span>
            </div>
          </div>
        </div>

        {/* Services list */}
        <div className="flex flex-col justify-center items-center uppercase my-2">
          <h2 className="text-3xl font-semibold mb-2">Our Packages</h2>
          <div className="text-center my-2">
            MARKETING + SALES, CUSTOMER CONSULTATION FOR{" "}
            <span className="text-yellow-300">1000 CAD</span>
          </div>
          <div className="text-center my-2">
            BUILD PERSONAL BRAND FOR{" "}
            <span className="text-yellow-300">500 CAD</span>
          </div>
        </div>
        <div className="font-light text-center text-sm mt-10 tracking-wider">
          FREE MORE WHEN{" "}
          <Link
            href="/booking#course_register"
            className="underline text-red-300 font-bold cursor-pointer"
          >
            REGISTER
          </Link>{" "}
          FOR A FULL COURSE
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
