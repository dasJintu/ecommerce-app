import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: {},
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.productList = action.payload;
    },
  },
});

export const { addProducts } = productSlice.actions;

export const selectMensProducts = (state) =>
  state.shop.productList.filter((t) => t.category === "men's clothing");

export const selectWomensProducts = (state) =>
  state.shop.productList.filter((t) => t.category === "women's clothing");

export const selectAccessoryProducts = (state) =>
  state.shop.productList.filter((t) => t.category === "jewelery");

export const selectElectronicProducts = (state) =>
  state.shop.productList.filter((t) => t.category === "electronics");

export default productSlice.reducer;
