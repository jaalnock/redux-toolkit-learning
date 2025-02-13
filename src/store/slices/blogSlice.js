import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    title: "",
    description: "",
  },
  blogList: [],
  currentEditedBlogId: null,
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

    handleDeleteBlog: (state, actions) => {
      const { currentBlogId } = actions.payload;

      let cpyBlogList = [...state.blogList];

      cpyBlogList = cpyBlogList.filter(
        (singleBlogItem) => singleBlogItem.id !== currentBlogId
      );

      state.blogList = cpyBlogList;

      localStorage.setItem("blogList", JSON.stringify(cpyBlogList));
    },

    setCurrentEditedBlogId: (state, actions) => {
      const { currentBlogId } = actions.payload;
      state.currentEditedBlogId = currentBlogId;
    },

    handleEditBlog: (state, actions) => {
      let cpyBlogList = [...state.blogList];

      const currentBlogIndex = cpyBlogList.findIndex(
        (singleBlogItem) => singleBlogItem.id === state.currentEditedBlogId
      );

      cpyBlogList[currentBlogIndex] = {
        ...cpyBlogList[currentBlogIndex],
        ...state.formData, // this refers to any changes done in form
      };

      state.blogList = cpyBlogList;
      localStorage.setItem("blogList", JSON.stringify(cpyBlogList));
    },
  },
});

export const {
  handleInputChange,
  handleAddNewBlog,
  setBlogListOnInitialLoad,
  handleDeleteBlog,
  setCurrentEditedBlogId,
  handleEditBlog,
} = blogSlice.actions;

export default blogSlice.reducer;
