import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "@/redux/cartRedux";

const cart = () => {
  const dispatch = useDispatch();

  // Get the products from the Redux store using useSelector
  const products = useSelector((state) => state.cart.products);

  const updateQuantity = (id, action) => {
    // Update the quantity in Redux store using dispatch
    // This assumes you have actions for increasing and decreasing product quantities
    // For the sake of this example, I'm using the addProduct action, but you'll likely need dedicated actions for updating the quantity
    const productToUpdate = products.find((product) => product.id === id);
    if (productToUpdate) {
      if (action === "increase") {
        dispatch(
          addProduct({ product: productToUpdate, price: productToUpdate.price })
        );
      } else if (action === "decrease" && productToUpdate.quantity > 1) {
        // Similarly, use an action to decrease the quantity in the Redux store
      }
    }
  };

  const removeProduct = (id) => {
    // Remove the product in the Redux store using dispatch
    // Again, you'll need a dedicated action to remove products from the cart in Redux
  };

  const getSubTotal = () => {
    return products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  };

  const getTotalItems = () => {
    return products.reduce((acc, product) => acc + product.quantity, 0);
  };

  return (
    <div className="w-full p-4 md:p-8 flex flex-col md:flex-row">
      <div className="w-full md:w-2/3 pr-0 md:pr-6 mb-8 md:mb-0">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Checkout</h2>
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b pb-4"
          >
            <img
              src={product.image}
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
                ${product.amount * product.quantity}
              </span>
              <button
                className="ml-4 text-red-500 hover:text-red-600 focus:outline-none"
                onClick={() => removeProduct(product.id)}
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
          Total Items: {getTotalItems()}
        </p>
        <h4 className="text-xl font-bold text-gray-700 mb-6">
          Sub Total: ${getSubTotal()}
        </h4>
        <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg transform transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default cart;
