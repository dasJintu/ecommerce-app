import { createSlice } from "@reduxjs/toolkit";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const initialState = {
  cartList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartList.push(action.payload);
      toast.success("Item added to cart successfully!", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
    },
    removeFromCart: (state, action) => {
      const newState = state.cartList.filter(
        (item) => item.id !== action.payload
      );
      state.cartList = newState;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectTotalAmount = (state) =>
  state.cart.cartList.map((item) => item.price).reduce((a, b) => a + b, 0);

export default cartSlice.reducer;
