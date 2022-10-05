import dataSlice from "./dataSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  },
});

export default store;
