import React, { useEffect, useState } from "react";
import CheckoutSummary from "@/components/checkout/CheckoutSummary";
import PaymentMethod from "@/components/checkout/PaymentMethod";

const Checkout = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <CheckoutSummary />
      <PaymentMethod />
    </div>
  );
};

export default Checkout;
