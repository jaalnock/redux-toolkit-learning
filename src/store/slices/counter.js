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

    //   (property) handleIncreaseCountAction: (state: WritableDraft<{
    //     countValue: number;
    // }>, action: {
    //     payload: any;
    //     type: string;
    // }) => void
    // this also has access to all the states like countValue here
    handleIncreaseCountAction: (state, action) => {
      state.countValue += 1;
    },
  },
});

export const { handleIncreaseCountAction } = counterSlice.actions;

export default counterSlice.reducer;
