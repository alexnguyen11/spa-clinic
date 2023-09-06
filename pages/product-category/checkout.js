import React from "react";
import Image from "next/image";

const checkout = ({ item }) => {
  return (
    <div className="flex items-center p-4 border rounded">
      <div className="flex-shrink-0">
        <img
          src=""
          className="w-24 h-24 object-cover rounded"
        />
      </div>
      <div className="ml-4 flex-grow">
        <p className="text-lg font-semibold">$</p>
        <p className="text-sm text-gray-500">x</p>
      </div>
    </div>
  );
};

export default checkout;
