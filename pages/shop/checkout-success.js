// pages/checkout-success.js
import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"; 
import Button from '@mui/material/Button'
import Link from "next/link";

const CheckoutSuccess = () => {
  const orderNumber = '123456789';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-6">
      <div className="flex flex-col items-center justify-center w-full max-w-lg p-6 bg-white shadow-md rounded-lg space-y-6">
        <CheckCircleOutlineIcon fontSize="large" style={{ color: '#10B981' }} />
        <h2 className="text-2xl font-bold text-gray-800">Checkout Successful!</h2>
        <p className="text-gray-600 text-center">
          Your payment has been processed successfully.
          <br />
          An invoice will be sent to your email shortly.
        </p>
        <p className="text-gray-600">
          Order Number: <span className="font-semibold">{orderNumber}</span>
        </p>
        <Link href="/" passHref>
          <Button
            variant="contained"
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white transition duration-300"
            size="large"
          >
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
