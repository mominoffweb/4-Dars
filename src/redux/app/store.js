import { configureStore } from "@reduxjs/toolkit";
import { reducer as basketReducer } from "../Features/basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer
  },
});
