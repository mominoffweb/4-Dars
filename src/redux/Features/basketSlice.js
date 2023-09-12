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
    increment: (state, action) => {
      state.products = state.products.map((item) => {
        if (item.name == action.payload) {
          return {
            ...item,
            amount: item.amount + 1,
          };
        } else {
          return item;
        }
      });
    },
    decrement: (state, action) => {
      state.products = state.products.map((item) => {
        if (item.name == action.payload && item.amount ) {
          return {
            ...item,
            amount: (item.amount -= 1),
          };
        } else {
          return item;
        }
      });
    },

    remove: (state, action) => {
      state.products = state.products.filter((Product) => {
        if (Product.name != action.payload) {
          return Product;
        }
      });
      state.amount = 0;
      state.products.map((Product) => {
        state.amount += Product.amount;
      });
    },
 
  },
});

export const { increment, decrement, remove, total } = basketSlise.actions;
export const { reducer } = basketSlise;
//  updateTotal: (state) => {
//    let amount = 0;
//    let total = 0;
//    state.products.forEach((item) => {
//      amount += item.amount;
//      total += item.amount * item.price;
//    });
//    state.amount = amount;
//    state.total = total;
//  };
