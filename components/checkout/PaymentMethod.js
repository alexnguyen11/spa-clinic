import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const PaymentMethod = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    // Send `paymentMethod.id` to your server for charging or other processes
  };

  return (
    <div className="w-full md:w-1/2 pl-4 p-8 md:p-12">
      <h3 className="text-2xl font-semibold mb-4 text-gray-700 tracking-wide">
        Payment
      </h3>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    </div>
  );
};

export default PaymentMethod;
