import React from "react";

const PaymentMethod = () => {

  const elements = useElements();

  const handleSubmit = async (event) => {

  };

  return (
    <div className="w-full md:w-1/2 pl-4 p-8 md:p-12">
      <h3 className="text-2xl font-semibold mb-4 text-gray-700 tracking-wide">
        Payment
      </h3>
      <form onSubmit={handleSubmit}>

        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    </div>
  );
};

export default PaymentMethod;
