import React from "react";
import Link from "next/link";
import CodeIcon from "@mui/icons-material/Code";

const CourseInfo = () => {
  return (
    <div>
      <div className="md:flex items-center m-auto max-w-6xl">
        <div className="text-gray-600 md:text-base text-sm">
          <div className="m-4 flex">
            <CodeIcon />
            <p className="mx-2">
              Students become good professionals, proficient in their profession, confident in beautifying customers, and opening stores.
            </p>
          </div>
          <div className="m-4 flex">
            <CodeIcon />
            <p className="mx-2">
              Students practice on real customers for 85% of the learning time.
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
              Opportunity to work on the entire system of the centre.
            </p>
          </div>
          <div className="m-4 flex">
            <CodeIcon />
            <p className="mx-2">Standardized curriculum for each student.</p>
          </div>
          <div className="m-4 flex">
            <CodeIcon />
            <p className="mx-2">
              No additional costs incurred during the study process.
            </p>
          </div>
        </div>

        <div className="text-center flex flex-col items-center justify-center md:p-4 rounded-lg">
          <div className="md:text-xl text-sm font-semibold">
            <p className="m-4 text-purple-500 italic">
              <span className="text-gray-500">
                MARKETING + SALES, CUSTOMER CONSULTATION FOR{" "}
              </span>
              1000 CAD
            </p>
            <p className="m-4 text-purple-500 italic">
              <span className="text-gray-500">
               BUILD PERSONAL BRAND FOR {" "}
              </span>
              500 CAD
            </p>
            <p className="m-5 text-gray-900">
              FREE MORE WHEN REGISTER FOR A FULL COURSE
            </p>
          </div>
          <Link
            className="inline-block rounded-md md:text-lg text-sm font-semibold py-2 px-4 text-white bg-purple-500"
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
