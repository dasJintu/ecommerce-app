import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../features/shop/productSlice";
import cartReducer from "../features/shop/cartSlice";

export const store = configureStore({
  reducer: {
    shop: shopReducer,
    cart: cartReducer,
  },
});
