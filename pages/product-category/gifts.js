import React, { useState } from "react";
import giftcardImg from "@/public/assets/giftcard.jpeg";
import Image from "next/image";

const Gifts = () => {
  const [selectedAmount, setSelectedAmount] = useState(0);

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
  };

  const purchaseGiftCard = () => {
    // Add your logic here to handle the gift card purchase
    console.log(`Purchased gift card for $${selectedAmount}`);
  };

  const denominations = [
    { amount: 50, image: giftcardImg },
    { amount: 100, image: giftcardImg },
    { amount: 150, image: giftcardImg },
    { amount: 200, image: giftcardImg },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Gift Cards</h1>
      <p className="mb-4">Select a gift card amount:</p>
      <div className="grid grid-cols-2 gap-6">
        {denominations.map((item) => (
          <div className="">
            <div className="overfolow-hidden">
              {" "}
              <Image className="rounded-t-lg" src={giftcardImg} />
            </div>

            <p className="text-center mt-2 font-semibold">{item.amount}</p>
          </div>
        ))}
      </div>
      <button
        className={`mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded ${
          selectedAmount === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={purchaseGiftCard}
        disabled={selectedAmount === 0}
      >
        Purchase Gift Card
      </button>
    </div>
  );
};

export default Gifts;
