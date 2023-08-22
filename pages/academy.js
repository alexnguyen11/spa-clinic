import React from "react";
import ContentBoard from "@/components/academy/ContentBoard";
import ContactCard from "@/components/academy/ContactCard";
import Image from "next/image";
import ProgramImg from "@/public/assets/background.jpeg";
import ProgramImg2 from "@/public/assets/background2.jpeg";
import Link from "next/link";
import CodeIcon from "@mui/icons-material/Code";

const academy = () => {
  return (
    <div className="w-full ">
      <div className="w-full relative h-[400px] overflow-hidden -z-50">
        <Image src={ProgramImg} layout="fill" objectFit="cover" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="tracking-[.25rem] uppercase text-white md:text-[3rem] m-4 font-light">
            Taichi Health & Beauty Academy Center
          </h1>
          <h2 className="tracking-[.14rem] uppercase text-white md:text-xl m-4 font-thin">
            Trung Tâm đào tạo & dạy nghề spa dưỡng sinh
          </h2>
        </div>
      </div>

      <div className="w-full h-full mx-auto px-4md:flex py-4 flex flex-col bg-stone-100 ">
        <div className="w-full flex justify-center my-10">
          {" "}
          <h1 className="tracking widest uppercase text-2xl font-bold text-gray-700">
            What We Provide
          </h1>
        </div>

        <div className="md:flex items-center m-auto max-w-6xl">
          <div className="text-gray-600 ">
            <div className="m-4 flex">
              <CodeIcon />

              <p className="mx-2">
                Học viên ra nghề chuyên môn giỏi, thạo nghề, tự tin làm đẹp cho
                khách hàng và mở cửa hàng
              </p>
            </div>
            <div className="m-4 flex">
              <CodeIcon />
              <p className="mx-2">
                Học viên được thực hành lên khách hàng thật chiếm 85% thời gian
                học
              </p>
            </div>

            <div className="m-4 flex">
              <CodeIcon />
              <p className="mx-2">Được đào tạo 1 kèm 1 khi tham giá khóa học</p>
            </div>
            <div className="m-4 flex">
              <CodeIcon />
              <p className="mx-2 flex">
                Được học hết tất cả các kỹ năng từ cơ bản đến nâng cao
              </p>
            </div>
            <div className="m-4 flex">
              <CodeIcon />
              <p className="mx-2">
                Cơ hội làm việc trên toàn bộ hệ thống của trung tâm
              </p>
            </div>
            <div className="m-4 flex">
              <CodeIcon />
              <p className="mx-2">Giáo trình quy chuẩn cho từng học viên</p>
            </div>
            <div className="m-4 flex">
              <CodeIcon />
              <p className="mx-2">
                Không phát sinh bất kể 1 chi phí phụ thu nào trong quá trình học
              </p>
            </div>
          </div>

          <div className="text-center flex flex-col items-center justify-center md:p-4 rounded-lg">
            <div className="text-xl font-semibold">
              <p className="m-5 text-purple-500">
                <span className="text-gray-900">
                  MARKETING + SALE TU VAN KHACH HANG{" "}
                </span>
                TRI GIA 15TR XAY DUNG THUONG HIEU CA NHAN TRI GIA 10TR TANG KEM
                KHI DANG KY FULL KHOA HOC
              </p>
            </div>
            <Link
              className="inline-block rounded-md text-lg font-semibold py-2 px-4 text-white bg-purple-500"
              href="#register"
            >
              Register Here
            </Link>
          </div>
        </div>
      </div>

      <ContentBoard />

      <div id="register" className="w-full relative h-[600px] overflow-hidden -z-50">
        <div className="absolute inset-0">
          <Image
            src={ProgramImg2}
            layout="fill"
            objectFit="cover"
            className="opacity-500"
            style={{ zIndex: -1 }}
          />
        </div>
        <ContactCard />
      </div>
    </div>
  );
};

export default academy;
