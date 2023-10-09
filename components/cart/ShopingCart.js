import { ShoppingBasket } from "@mui/icons-material";
import { useSelector } from 'react-redux';


const ShopingCart = () => {
    const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div>
      <ShoppingBasket />
        {quantity}
    </div>
  );
};

export default ShopingCart;
