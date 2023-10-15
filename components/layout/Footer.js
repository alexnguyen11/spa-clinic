import React from "react";
import LogoImg from "@/public/assets/logo_new.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-slate-100 ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center overflow-hidden">
              <Image
                src={LogoImg}
                className="md:w-[300px] w-[150px]"
                alt="Taichi Logo"
              />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Resources
              </h2>
              <ul className="text-gray-600  font-medium">
                <li className="mb-4">
                  <a href="/contact" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/booking" className="hover:underline">
                    Make a Booking
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Follow us
              </h2>
              <ul className="text-gray-600 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline ">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Business Hours
              </h2>
              <ul className="text-gray-600 font-medium">
                <li className="mb-4">
                  <p className="">Monday - Sunday</p>
                </li>
                <li>
                  <p className="">10:00 AM - 8:00 PM</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center ">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Taichi Center
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>

            <a href="#" className="text-gray-500 hover:text-gray-900 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07z"
                />
              </svg>
              <span className="sr-only">Tiktok page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
