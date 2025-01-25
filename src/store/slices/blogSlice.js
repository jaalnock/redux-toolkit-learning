import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    title: "",
    description: "",
  },
  blogList: [],
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

    handleAddNewBlog: (state, action) => {
      const { title, description } = state.formData;

      // Check if both title and description are not empty
      if (title.trim() === "" || description.trim() === "") {
        console.log("Error: Title or description is empty");
        return; // Do nothing if either field is empty
      }

      // Proceed to add the new blog to the blogList if both fields are filled
      state.blogList.push({
        id: nanoid(),
        ...state.formData,
      });

      // Clear the form data after adding the blog
      state.formData = {
        title: "",
        description: "",
      };

      //Saving in localStorage so that data won't lost on refresh
      localStorage.setItem("blogList", JSON.stringify(state.blogList));
    },

    setBlogListOnInitialLoad: (state, actions) => {
      // in the payload, we are passing localStorage blogList
      state.blogList = actions.payload.blogList;
    },
  },
});

export const { handleInputChange, handleAddNewBlog, setBlogListOnInitialLoad } =
  blogSlice.actions;

export default blogSlice.reducer;
