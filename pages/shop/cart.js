import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeProduct,
} from "@/src/redux/cartRedux";
import Link from "next/link";
import PayButton from "@/src/components/checkout/PayButton";

const cart = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart.products);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const subtotal = useSelector((state) => state.cart.total);

  const updateQuantity = (_id, action) => {
    if (action === "increase") {
      dispatch(incrementQuantity(_id));
    } else if (action === "decrease") {
      dispatch(decrementQuantity(_id));
    }
  };

  const handleRemoveProduct = (_id) => {
    dispatch(removeProduct(_id));
  };

  if (totalQuantity === 0) {
    return (
      <div className="h-[60vh] w-full p-4 md:p-8 text-center">
        <div>
          {" "}
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Your cart is empty.
          </h2>
          <Link href="/">
            <p className="text-blue-500 hover:underline">
              Start adding some products here!
            </p>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full p-4 md:p-8 flex flex-col md:flex-row">
        <div className="h-screen w-full md:w-2/3 pr-0 md:pr-6 mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Shopping Cart
          </h2>
          {products.map((product) => (
            <div
              key={product._id}
              className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b pb-4"
            >
              <img
                src={product.image?.url}
                alt={product.name}
                className="w-32 h-32 object-cover mb-4 md:mb-0"
              />

              <div className="ml-0 md:ml-6 flex-1">
                <span className="text-lg text-gray-700">{product.productName}</span>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => updateQuantity(product._id, "decrease")}
                    className="bg-gray-200 px-2 py-1 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded"
                  >
                    -
                  </button>
                  <span className="mx-2 text-gray-600">{product.quantity}</span>
                  <button
                    onClick={() => updateQuantity(product._id, "increase")}
                    className="bg-gray-200 px-2 py-1 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="mt-4 md:mt-0">
                <span className="text-lg font-medium text-gray-700">
                  ${product.price}
                </span>
                <button
                  className="ml-4 text-red-500 hover:text-red-600 focus:outline-none"
                  onClick={() => handleRemoveProduct(product._id)}
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
          <PayButton products={products} />
        </div>
      </div>
    );
  }
};

export default cart;
