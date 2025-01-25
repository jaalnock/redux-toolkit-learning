import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    title: "",
    description: "",
  },
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    handleInputChange: () => {},
  },
});

export const { handleInputChange } = blogSlice.actions;

export default blogSlice.reducer;
