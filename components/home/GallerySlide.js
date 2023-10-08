import { useState, useEffect } from "react";
import {
  ArrowBackIos,
  ArrowForwardIos,
  FiberManualRecord,
} from "@mui/icons-material/";

const GallerySlide = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1488345979593-09db0f85545f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1591343395082-e120087004b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFzc2FnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1600&q=60",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      <div className="md:flex justify-between">
        <div className="uppercase m-auto">
          <h1 className="text-[27px] md:text-[40px] m-4 px-4 tracking widest">
            Tai Chi Health & beauty Academy Centre
          </h1>
          <h2 className="text-[16px] md:text-[20px] m-4 px-4 tracking-widest">
            Trung tâm đào tạo & dạy nghề spa dưỡng sinh
          </h2>
        </div>

        <div className="relative w-[300px] md:w-[800px] h-[200px] md:h-[600px]  m-auto p-4">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-cneter bg-cover duration-700 ease-in-out group cursor-pointer"
          >
            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-white cursor-pointer">
              <ArrowBackIos onClick={prevSlide} />
            </div>
            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-white cursor-pointer">
              <ArrowForwardIos onClick={nextSlide} />
            </div>
          </div>

          <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`cursor-pointer ${
                  currentIndex === slideIndex
                    ? "text-gray-700"
                    : "text-gray-400"
                }`}
              >
                <FiberManualRecord className="text-sm" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySlide;

{
  /***

0


*/
}
