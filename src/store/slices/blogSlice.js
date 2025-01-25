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
    handleInputChange: (state, action) => {
      let cpyFormData = { ...state.formData };
      cpyFormData = {
        ...cpyFormData,
        ...action.payload,
      };

      state.formData = cpyFormData;
    },
  },
});

export const { handleInputChange } = blogSlice.actions;

export default blogSlice.reducer;
