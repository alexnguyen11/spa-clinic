import React from 'react'
import { useSelector } from "react-redux";

const cart = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const products = useSelector((state) => state.cart.products);

  return (
    <div><div>{quantity}</div><div>{products}</div></div>
  )
}

export default cart