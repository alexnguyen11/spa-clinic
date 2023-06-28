import React from "react";

const ContentBoard = () => {
  const programs = [
    {
      id: 1,
      Ename: "Lorem ipsum dolor sit amet",
      Vname: "gội đầu dưỡng sinh chuẩn trung hoa",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 400,
    },
    {
      id: 2,
      Ename: "Lorem ipsum dolor sit amet",
      Vname: "trị liệu vai gáy chuyên sâu",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 400,
    },
    {
      id: 3,
      Ename: "Lorem ipsum dolor sit amet",
      Vname: "trị liệu chân chuyên sâu",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 400,
    },
    {
      id: 4,
      Ename: "Lorem ipsum dolor sit amet",
      Vname: "trị liệu body, phục hồi chức năng tạng phủ",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 400,
    },
    {
      id: 5,
      Ename: "Lorem ipsum dolor sit amet",
      Vname: "bài phế hậu covid, thải độc phổi",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 400,
    },
    {
      id: 6,
      Ename: "Lorem ipsum dolor sit amet",
      Vname: "trị liệu toàn thân chuyên sâu",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 400,
    },
    {
      id: 7,
      Ename: "Lorem ipsum dolor sit amet",
      Vname: "giảm béo dưỡng sinh, vỡ mỡ tại chỗ không sâm lấn",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 400,
    },
    {
      id: 8,
      Ename: "Lorem ipsum dolor sit amet",
      Vname: "massage body + đá nóng thư giản",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 400,
    },
    {
      id: 9,
      Ename: "Lorem ipsum dolor sit amet",
      Vname: "massage chuẩn trung hoa",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 400,
    },
    {
      id: 10,
      Ename: "Lorem ipsum dolor sit amet",
      Vname: "massage mặt ngọc",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 400,
    },
    {
      id: 11,
      Ename: "Lorem ipsum dolor sit amet",
      Vname: "chăm sóc da cơ bản",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 400,
    },
    {
      id: 12,
      Ename: "Lorem ipsum dolor sit amet",
      Vname: "điều trị mụn, nám, tàn nhang, sẹo rỗ, phục hồi da",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 400,
    },
  ];

  return (
    <div className="w-full">
      {programs.map((program) => (
        <div
          key={program.id}
          className="m-2 p-4 flex items-center justify-between ml-10 text-sm rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline mb-2 hover:scale-105 transform transition duration-500 hover:font-medium flex-wrap cursor-pointer shadow-md hover:drop-shadow-2xl "
        >
          <div className="m-2">{program.id}</div>
          <div className="w-[300px] flex flex-col flex-wrap justify-center p-2">
            <div className="tracking widest uppercase text-base my-2">
              {program.Ename}
            </div>
            <div className="tracking widest uppercase text-xs my-2">
              {program.Vname}
            </div>
          </div>
          <div className="w-[500px] p-2 my-2">
            <p className="tracking widest">{program.desc}</p>
          </div>
          <div className="w-full md:w-[100px] p-2 my-2">
            <div className="text-left md:text-right">{program.price} CAD</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentBoard;
