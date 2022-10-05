import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export default createSlice({
  name: "data",
  initialState: {
    count: 0,
  },
  reducers: {
    incre: (state, action) => {
      console.log("incre");
      state.count += 1;
    },
    decre: (state, action) => {
      console.log("decre");
      state.count -= 1;
    },
    searchFilterChange: (state, action) => {
      state.count = state.count + 1;
    },
  },
});
