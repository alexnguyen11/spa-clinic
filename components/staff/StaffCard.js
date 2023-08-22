import React from "react";

const StaffCard = ({ name, position, desc, img }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={img} // Replace with actual image path
        alt="Staff 1"
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="text-lg font-semibold mt-2">{name}</h3>
      <p className="text-sm text-gray-600">{position}</p>
      <p className="text-sm mt-2">{desc}</p>
    </div>
  );
};

export default StaffCard;
