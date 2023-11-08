import React from "react";
import Image from "next/image";

const GiftCard = ({
  item,
  giftcardImg,
  quantity,
  handleAmountSelect,
  handleAddToCart
}) => {
  return (
    <div className="text-center">
      <div className="overflow-hidden rounded-t-lg">
        <input
          type="radio"
          name="gift"
          id={`gift-card-${item.amount}`}
          className="hidden"
          onChange={() => handleAmountSelect(item.amount)}
        />
        <label htmlFor={`gift-card-${item.amount}`} className="cursor-pointer">
          <Image
            src={giftcardImg}
            alt={`Gift Card ${item.amount}`}
            className="w-full rounded-t-lg"
          />
          <p className="text-center mt-2 font-semibold">${item.amount}</p>
        </label>

        <button
          className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded"
          onClick={handleAddToCart}
          disabled={quantity === 0}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default GiftCard;
