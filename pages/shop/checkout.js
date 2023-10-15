import React, { useState } from "react";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    cardNumber: "",
    expiryDate: "",
    cvv: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Submit data to the backend
  };

  return (
    <div className="w-full p-4 md:p-8">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <h3 className="text-xl mb-4">Shipping Details</h3>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border"
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border"
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl mb-4">Order Summary</h3>
          {/* Display order items and total here */}
          <p>Item 1: $10.00</p>
          <p>Item 2: $20.00</p>
          <p>Total: $30.00</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl mb-4">Payment Details</h3>
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border"
          />
          <input
            type="text"
            name="expiryDate"
            placeholder="Expiry Date MM/YY"
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border"
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border"
          />
        </div>

        <button type="submit" className="py-2 px-4 bg-blue-500 text-white">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
