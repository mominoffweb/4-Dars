import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../Features/basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer
  },
});
