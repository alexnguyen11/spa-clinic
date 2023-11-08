import React from "react";
import axios from "axios";
import { url } from "@/utils/api";
import { resetCart } from "@/src/redux/cartRedux";
import { useDispatch } from "react-redux";

const PayButton = ({ products }) => {

  const dispatch = useDispatch();

  const handleCheckout = () => {
    axios
      .post(`${url}/payment`, { products })
      .then((res) => {
        if (res.data.url) {
          dispatch(resetCart());
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <button
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg transform transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={() => handleCheckout()}
      >
        Proceed to Check Out
      </button>
    </>
  );
};

export default PayButton;
