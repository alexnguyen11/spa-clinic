import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeProduct,
} from "@/redux/cartRedux";
import Link from "next/link";
import Image from "next/image";

const cart = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart.products);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const subtotal = useSelector((state) => state.cart.total);

  const updateQuantity = (id, action) => {
    if (action === "increase") {
      dispatch(incrementQuantity(id));
    } else if (action === "decrease") {
      dispatch(decrementQuantity(id));
    }
  };

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <div className="w-full p-4 md:p-8 flex flex-col md:flex-row">
      <div className="w-full md:w-2/3 pr-0 md:pr-6 mb-8 md:mb-0">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Shopping Cart
        </h2>
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b pb-4"
          >
            <Image
              src={product.img}
              alt={product.name}
              className="w-32 h-32 object-cover mb-4 md:mb-0"
            />

            <div className="ml-0 md:ml-6 flex-1">
              <span className="text-lg text-gray-700">{product.name}</span>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => updateQuantity(product.id, "decrease")}
                  className="bg-gray-200 px-2 py-1 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded"
                >
                  -
                </button>
                <span className="mx-2 text-gray-600">{product.quantity}</span>
                <button
                  onClick={() => updateQuantity(product.id, "increase")}
                  className="bg-gray-200 px-2 py-1 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-4 md:mt-0">
              <span className="text-lg font-medium text-gray-700">
                ${product.amount}
              </span>
              <button
                className="ml-4 text-red-500 hover:text-red-600 focus:outline-none"
                onClick={() => handleRemoveProduct(product.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full md:w-1/3 mt-6 md:mt-0 md:h-[250px] p-6 bg-white shadow-lg rounded-lg">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Order Summary
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          Total Items: {totalQuantity}
        </p>
        <h4 className="text-xl font-bold text-gray-700 mb-6">
          Sub Total: ${subtotal}
        </h4>
        <Link href="/shop/checkout">
          {" "}
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg transform transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default cart;
