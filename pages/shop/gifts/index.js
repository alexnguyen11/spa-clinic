import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addProduct } from "@/redux/cartRedux";

const index = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product, price) => {
    dispatch(addProduct({ product, price }));
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Gift Certificates</h1>
      <p className="mb-8 text-gray-600">
        Treat your loved ones with a gift of relaxation and rejuvenation. Choose
        from our range of gift certificates, perfect for any occasion.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {giftCards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center"
          >
            <img
              src={card.img}
              alt={`Gift Card of $${card.amount}`}
              className="mb-4 w-48 h-48 object-cover rounded"
            />
            <Link href={card.link}>
              <div className="mb-4 text-xl font-semibold">$ {card.amount}</div>
            </Link>
            <button
              onClick={() => handleAddToCart(card, card.amount)}
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

const giftCards = [
  { amount: 50, link: "/path/to/50-link", img: "/path/to/image50.jpg" },
  { amount: 100, link: "/path/to/100-link", img: "/path/to/image100.jpg" },
  { amount: 150, link: "/path/to/150-link", img: "/path/to/image150.jpg" },
  { amount: 200, link: "/path/to/200-link", img: "/path/to/image200.jpg" },
];
