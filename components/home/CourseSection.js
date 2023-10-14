import React from "react";

const CourseSection = () => {
  const courses = [
    {
      name: "Course 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget turpis vel nulla efficitur lacinia.",
      imageUrl: "https://example.com/course1-image.jpg",
      link: "/course1",
    },
    {
      name: "Course 2",
      description:
        "Praesent tristique velit id turpis euismod, eget ultrices velit efficitur. Nullam euismod ultricies augue in hendrerit.",
      imageUrl: "https://example.com/course2-image.jpg",
      link: "/course2",
    },
    {
      name: "Course 3",
      description:
        "Suspendisse at justo id libero tincidunt congue eget at libero. Curabitur eu risus ac felis scelerisque malesuada.",
      imageUrl: "https://example.com/course3-image.jpg",
      link: "/course3",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <h2 className=" text-2xl md:text-4xl font-bold mb-6 text-center">Our Courses</h2>

        <p className="text-lg mb-12 text-center max-w-3xl mx-auto">
          Discover our most popular courses designed to provide you with
          high-quality education and valuable skills for a successful career.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={course.imageUrl}
                alt={`Course ${index + 1}`}
                className="w-full h-48 mb-4 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-3">{course.name}</h3>
                <p className="text-sm mb-4 truncate-2-lines">
                  {course.description}
                </p>
                <a
                  href={course.link}
                  className="mt-2 bg-emerald-600 text-white px-5 py-2 rounded hover:bg-emerald-700 transition-colors duration-300 inline-block"
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
