import React from "react";
import { useDispatch } from "react-redux";
import { addProduct, resetCart } from "@/src/redux/cartRedux";
import axios from "axios";
import { useState, useEffect } from "react";
import { url } from "@/utils/api";

const index = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const getProducts = async () => {
    try {
      const { data } = await axios.get(`${url}/product`);
      if (JSON.stringify(products) !== JSON.stringify(data)) {
        setProducts(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [products]);

  const handleAddToCart = (product, price) => {
    dispatch(addProduct({ product, price }));
  };

  const handleResetCart = () => {
    dispatch(resetCart());
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Gift Certificates</h1>
      <p className="mb-8 text-gray-600">
        Treat your loved ones with a gift of relaxation and rejuvenation. Choose
        from our range of gift certificates, perfect for any occasion.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center"
          >
            <img
              src={product.image?.url}
              alt={`Gift Card of $${product.price}`}
              className="mb-4 w-48 h-48 object-cover rounded"
            />
            <div className="mb-4 text-xl font-semibold">$ {product.price}</div>
            <button
              onClick={() => handleAddToCart(product, product.price)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-auto"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
