import React from "react";

const ServiceCard = () => {
  return (
    <div className="m-auto w-[1000px]">
      <div className="relative w-full h-[300px] mb-10 rounded-lg bg-[#fff] border-2 border-[#ddd] overflow-hidden cursor-pointer shadow-md translate-x-0 translate-y-[-3px] ">
        <div className="absolute inset-0">
          <img
            className="absolute top-0 left-0 transition-transform duration-200 ease"
            src="https://picsum.photos/800/600?image=1041"
          />
          <div className="mx-auto absolute top-7 bottom-7 right-430px w-calc(100% - 470px) text-base block bg-ff0000bb bg-white top--20 left--55 h-140 w-60 transform-rotate-8">
            <div className="font-voces font-sans text-base">Card Title</div>
            <div className="font-voces font-sans text-gray-500">
              This explains the card in more detail
            </div>
            <div className="left-0 w-12 h-2 my-4 rounded-full bg-blue-500 transition-width duration-200 ease-in"></div>
            <div className="relative z-10 text-sm text-gray-700 h-28 overflow-hidden">
              <p className="h-full overflow-hidden whitespace-nowrap overflow-ellipsis">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="absolute bottom-3 text-sm text-gray-500 cursor-default select-none pointer-events-none">
              <span className="inline-block bg-gray-300 text-gray-700 rounded-l-md leading-6 pl-10 pr-4 relative mr-5 cursor-default select-none transition-colors duration-200  rounded-full shadow inset-0 h-6 left-2 top-2">
                HTML
              </span>
              <span className="inline-block bg-gray-300 text-gray-700 rounded-l-md leading-6 pl-10 pr-4 relative mr-5 cursor-default select-none transition-colors duration-200">
                CSS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
