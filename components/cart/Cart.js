import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useSelector } from "react-redux";

const Cart = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className="hover:text-gray-900 cursor-pointer flex justify-center ">
      <ShoppingBagIcon />
      <p className="mt-2">{quantity}</p>
    </div>
  );
};

export default Cart;
