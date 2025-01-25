import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countValue: 0,
};

// Create a slice with name and initialstate and reducers
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // all logic , methods here
    handleIncreaseCountAction: () => {},
  },
});

export const { handleIncreaseCountAction } = counterSlice.actions;

export default counterSlice.reducer;
