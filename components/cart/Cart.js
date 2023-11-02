import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useSelector } from "react-redux";

const Cart = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  console.log(totalQuantity)

  return (
    <div className="hover:text-gray-900 cursor-pointer flex justify-center ">
      <ShoppingBagIcon />
      <p className="mt-2">{totalQuantity}</p>
    </div>
  );
};

export default Cart;
