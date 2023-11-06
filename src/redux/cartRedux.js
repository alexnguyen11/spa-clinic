import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalQuantity: 0,
    total: 0,
  },
  reducers: {
    initializeCart: (state, action) => {
      state.products = action.payload.products;
    },
    addProduct: (state, action) => {
      // check if there's the same product in the cart
      const productInCart = state.products.find(
        (product) => product._id === action.payload.product._id
      );

      if (productInCart) {
        productInCart.quantity++;
      } else {
        state.products.push({ ...action.payload.product, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.total += action.payload.price;
    },

    incrementQuantity: (state, action) => {

      const product = state.products.find(
        (product) => product._id === action.payload
      );

      product.quantity++;
      state.totalQuantity += 1;
      state.total += product.price;
    },

    decrementQuantity: (state, action) => {
      const product = state.products.find(
        (product) => product._id === action.payload
      );
      if (product.quantity > 1) {
        product.quantity--;
        state.totalQuantity -= 1;
        state.total -= product.price;
      } else {
        // If product quantity is 1, remove it from the cart
        state.totalQuantity -= 1;
        state.total -= product.price;
        state.products = state.products.filter((p) => p._id !== action.payload);
      }
    },

    removeProduct: (state, action) => {
      const productToRemove = state.products.find(
        (product) => product._id === action.payload
      );

      if (productToRemove) {
        state.totalQuantity -= productToRemove.quantity;
        state.total -= productToRemove.price * productToRemove.quantity;
      }
      state.products = state.products.filter((p) => p._id !== action.payload);
    },

    setCart: (state, action) => {
      return action.payload;
    },
    resetCart: (state) => {
      return {
        products: [],
        totalQuantity: 0,
        total: 0,
      };
    },
  },
});

export const {
  initializeCart,
  addProduct,
  incrementQuantity,
  decrementQuantity,
  removeProduct,
  resetCart,
} = cartSlice.actions;
export default cartSlice.reducer;