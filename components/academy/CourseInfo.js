import React from "react";
import Link from "next/link";
import CodeIcon from "@mui/icons-material/Code";

const CourseInfo = () => {
  return (
    <div>
      <div className="md:flex items-center m-auto max-w-6xl">
        <div className="text-gray-600 ">
          <div className="m-4 flex">
            <CodeIcon />
            <p className="mx-2">
              Students become professionally skilled, master their craft, gain confidence in beautifying clients, and open their own businesses.
            </p>
          </div>
          <div className="m-4 flex">
            <CodeIcon />
            <p className="mx-2">
              Students practice on real clients for 85% of the learning time.
            </p>
          </div>

          <div className="m-4 flex">
            <CodeIcon />
            <p className="mx-2">Receive 1-on-1 training during the course.</p>
          </div>
          <div className="m-4 flex">
            <CodeIcon />
            <p className="mx-2 flex">
              Learn all skills from basic to advanced.
            </p>
          </div>
          <div className="m-4 flex">
            <CodeIcon />
            <p className="mx-2">
              Opportunity to work throughout the center's entire system.
            </p>
          </div>
          <div className="m-4 flex">
            <CodeIcon />
            <p className="mx-2">Standardized curriculum for each student.</p>
          </div>
          <div className="m-4 flex">
            <CodeIcon />
            <p className="mx-2">
              No additional costs incurred during the learning process.
            </p>
          </div>
        </div>

        <div className="text-center flex flex-col items-center justify-center md:p-4 rounded-lg">
          <div className="text-xl font-semibold">
            <p className="m-5 text-purple-500">
              <span className="text-gray-900">
                MARKETING + SALES CONSULTATION{" "}
              </span>
              VALUED AT 845 CAD BRAND BUILDING VALUED AT 845 CAD AS A BONUS WHEN REGISTERING FOR THE FULL COURSE
            </p>
          </div>
          <Link
            className="inline-block rounded-md text-lg font-semibold py-2 px-4 text-white bg-purple-500"
            href="/booking/#course_register"
          >
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
