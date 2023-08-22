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
                  Taichigroup@icloud.com
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
                  className="text-base font-medium text-gray-500 md:text-lg"
                >
                  587-917-9758
                </a>
              </div>
            </div>

            <div className="w-full p-4 mb-10 sm:w-1/2 ml-[5rem]">
              <div className="max-w-xs mx-auto">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-gray-500 rounded-full ">
                  <a
                    href="https://www.google.com/maps?sca_esv=558805880&output=search&q=taichi+massage&source=lnms&entry=mc&sa=X&ved=2ahUKEwi_jMyYxO6AAxX9GTQIHS6VC7QQ0pQJegQIDBAB"
                    target="_blank"
                  >
                    {" "}
                    <LocationOn />
                  </a>
                </div>
                <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl">
                  Office
                </h2>
                <a
                  href="https://www.google.com/maps?sca_esv=558805880&output=search&q=taichi+massage&source=lnms&entry=mc&sa=X&ved=2ahUKEwi_jMyYxO6AAxX9GTQIHS6VC7QQ0pQJegQIDBAB"
                  target="_blank"
                  className="text-base font-medium text-gray-500 md:text-lg "
                >
                  5717 3 St SW, Calgary, AB T2H 0J6
                </a>
              </div>
            </div>

            <div className="w-full p-4 sm:w-1/2 ml-[5rem]">
              <div className="max-w-xs mx-auto">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-gray-500 rounded-full">
                  <Interests />
                </div>
                <h2 className="mb-4 text-xl font-bold leading-9 text-gray-400 md:text-2xl">
                  Social
                </h2>

                <div className="flex flex-row items-center gap-3">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07z"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <Facebook className="w-8 h-8 text-blue-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
