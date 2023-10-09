import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    initializeCart: (state, action) => {
      state.products = action.payload.products;
    },
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload.product);
      state.total += action.payload.price;
    },
    setCart: (state, action) => {
      return action.payload;
    },
  },
});

export const { initializeCart, addProduct } = cartSlice.actions;
export default cartSlice.reducer;
