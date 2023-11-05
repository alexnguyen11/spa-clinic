import Image from "next/image";
import ProgramImg from "@/public/assets/background.jpeg";

const AcademyBanner = () => {
  return (
    <div className="w-full relative h-[500px] -z-10">
      <Image
        src={ProgramImg}
        className="object-cover overflow-hidden h-full w-full"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="tracking-[.25rem] uppercase text-white text-2xl md:text-[2.5rem] m-4 font-light text-center">
          Taichi Health & Beauty Academy Center
        </h1>
        <h2 className="tracking-[.14rem] uppercase text-white text-[12px] md:text-xl md:mt-10  m-4 font-thin text-center">
          Trung Tâm đào tạo & dạy nghề spa dưỡng sinh
        </h2>
      </div>
    </div>
  );
};

export default AcademyBanner;
