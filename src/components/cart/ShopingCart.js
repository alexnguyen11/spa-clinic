import { ShoppingBasket } from "@mui/icons-material";

const ShopingCart = ({totalQuantity}) => {

  return (
    <div className="relative inline-block">
      <ShoppingBasket className="text-gray-700" />
      {totalQuantity > 0 && (
        <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {totalQuantity}
        </span>
      )}
    </div>
  );
};

export default ShopingCart;
