import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

const CheckoutSummary = () => {
  const products = useSelector((state) => state.cart.products);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const subtotal = useSelector((state) => state.cart.total);
  return (
    <div className="w-full md:w-1/2 pr-4 bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl ">
      <div className="p-8 md:p-12 space-y-8">
        <h2 className="text-4xl font-extrabold text-white tracking-widest">
          Your Checkout
        </h2>

        <div className="divide-y divide-gray-700 space-y-6">
          {" "}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-300 tracking-wide">
              Order Summary
            </h3>
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-center space-x-4 py-3 hover:bg-gray-800 transition duration-300 transform hover:scale-105"
              >
                <Image
                  src={product.img}
                  alt={product.name}
                  width={60}
                  height={60}
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold text-gray-200">
                      {product.name}
                    </p>
                    <p className="text-md text-gray-300">${product.amount}</p>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">
                    Qty: {product.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="pt-4 text-2xl font-extrabold text-gray-100 mt-4">
            Subtotal: ${subtotal}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSummary;
