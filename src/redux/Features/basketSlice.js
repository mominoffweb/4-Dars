import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../Data";

const initialState = {
  products: storeData,
  amount: 0,
  total: 0,
};

const basketSlise = createSlice({
  name: "basket",
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      const item = state.products.find((item) => item.name === payload);
      item.amount += 1;
    },
    decrement: (state, { payload }) => {
      const item = state.products.find((item) => item.name === payload);
      item.amount--;
    },

    remove: (state, { payload }) => {
      state.products = state.products.filter((item) => {
        return item.name !== payload;
      });
    },
    updateTotal: (state) => {
      let amount = 0;
      let total = 0;

      state.products.forEach((item) => {
        amount += item.amount;
        total += item.price * item.amount;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { increment, decrement, remove, updateTotal } =
  basketSlise.actions;
export default basketSlise.reducer;
