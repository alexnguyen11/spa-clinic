import React from "react";
import course1Img from "@/public/assets/home/course1.jpeg";
import course2Img from "@/public/assets/home/course2.jpeg";
import course3Img from "@/public/assets/home/course3.jpeg";
import Image from "next/image";

const CourseSection = () => {
  const courses = [
    {
      ename: "ORIENTIAL AYURVEDIC HEAD SHAMPOO AND MASSAGE COURSE",
      vname: "GỘI ĐẦU DƯỠNG SINH CHUẨN TRUNG HOA",
      imageUrl: course1Img,
      link: "/academy",
    },
    {
      ename: "ORIENTAL AYURVEDA FOOT SPA TREATMENT COURSE",
      vname: "Foot Spa dưỡng sinh chuẫn trung hoa",
      imageUrl: course2Img,
      link: "/academy",
    },
    {
      ename: "PROFESSIONAL QUALIFICATION AYURVEDA MASSAGE COURSE",
      vname: "MASSAGE dưỡng sinh CHUẨN TRUNG HOA",
      imageUrl: course3Img,
      link: "/academy",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
          Our Courses
        </h2>
        <p className="text-lg mb-12 text-center max-w-3xl mx-auto">
          Discover our most popular courses designed to provide you with
          high-quality education and valuable skills for a successful career.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white flex flex-col shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full h-48 relative mb-4 rounded-t-lg overflow-hidden">
                <Image
                  src={course.imageUrl}
                  alt={course.ename}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="md:text-[1rem] font-semibold mb-3 ">
                    {course.ename}
                  </h3>
                  <p className="text-[0.7rem] mb-4 uppercase">{course.vname}</p>
                </div>
                <a
                  href={course.link}
                  className="self-start mt-2 bg-emerald-600 text-white px-5 py-2 rounded hover:bg-emerald-700 transition-colors duration-300"
                >
                  Discover More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
