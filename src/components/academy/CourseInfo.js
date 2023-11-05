import React from "react";
import Link from "next/link";
import CodeIcon from "@mui/icons-material/Code";
import Button from "@mui/material/Button";

const CourseInfo = () => {
  return (
    <div className="p-8 sm:p-16 bg-stone-100 rounded-lg shadow-lg">
      <div className="text-center">
        <h1 className="tracking-widest uppercase text-2xl md:text-4xl font-bold text-gray-700 mb-10">
          What We Provide
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {[
          "Students become good professionals, proficient in their profession, confident in beautifying customers, and opening stores.",
          "Students practice on real customers for 85% of the learning time.",
          "Receive 1-on-1 training during the course.",
          "Learn all skills from basic to advanced.",
          "Opportunity to work on the entire system of the centre.",
          "Standardized curriculum for each student.",
          "No additional costs incurred during the study process.",
        ].map((text, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition"
          >
            <CodeIcon fontSize="large" color="primary" />
            <p className="text-gray-600">{text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/booking#course_register">
          <Button
            variant="contained"
            className="text-white bg-black hover:bg-primary-600 transition"
            size="large"
          >
            Register Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CourseInfo;
