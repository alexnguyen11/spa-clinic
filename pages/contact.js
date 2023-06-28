import {
  Email,
  LocalPhone,
  LocationOn,
  Interests,
  Facebook,
} from "@mui/icons-material/";
import ContactImg from "@/public/assets/contact.jpeg";
import Image from "next/image";

const contact = () => {
  return (
    <div className="w-full h-full font-poppins">
      <div className="w-full h-[400px] relative overflow-hidden -z-50">
        <Image src={ContactImg} layout="fill" objectFit="cover" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="pb-2 mb-2 text-xl font-bold text-gray-100 md:text-4xl">
            Let's Stay Connected
          </h2>
          <p className="text-sm dark:text-gray-200">
            Lorem ipsum dor amet ispicusus isopiros amet ispis lorem{" "}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center bg-stone-100 w-full ">
        <div className="justify-center max-w-6xl p-4 mx-auto lg:py-11 md:px-6">
          <div className="grid md:grid-cols-2 gap-[5]">
            <div className="w-full p-4 mb-10 sm:w-1/2 ml-[5rem]">
              <div className="max-w-xs mx-auto">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-gray-500 rounded-full ">
                  <Email />
                </div>
                <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl">
                  Email
                </h2>
                <a
                  href="#"
                  className="text-base font-medium text-gray-500 md:text-lg "
                >
                  TaichiAcademy@gmail.com
                </a>
              </div>
            </div>

            <div className="w-full p-4 mb-10 sm:w-1/2 ml-[5rem]">
              <div className="max-w-xs mx-auto">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-gray-500 rounded-full ">
                  <LocalPhone />
                </div>
                <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl">
                  Phone
                </h2>
                <a
                  href="#"
                  claclassNamess="text-base font-medium text-gray-500 md:text-lg"
                >
                  +9876542312
                </a>
              </div>
            </div>

            <div className="w-full p-4 mb-10 sm:w-1/2 ml-[5rem]">
              <div className="max-w-xs mx-auto">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-gray-500 rounded-full ">
                  <LocationOn />
                </div>
                <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl">
                  Office
                </h2>
                <a
                  href="#"
                  className="text-base font-medium text-gray-500 md:text-lg "
                >
                  Calgary, Alberta
                </a>
              </div>
            </div>

            <div className="w-full p-4 sm:w-1/2 ml-[5rem]">
              <div className="max-w-xs mx-auto">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-gray-500 rounded-full">
                  <Interests />
                </div>
                <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-gray-400">
                  Social
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
