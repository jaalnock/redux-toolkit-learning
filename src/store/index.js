// This will take all the logic

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
import blogReducer from "./slices/blogSlice";

// this will take all the reducers
//   then combine all reducers
//     and add it in main root reducer

const store = configureStore({
  //We needed to pass one reducer only here
  // reducer: counterReducer,

  // For multiple reducers pass them as key value in object
  // and make a main root reducer
  reducer: {
    counter: counterReducer,
    blog: blogReducer,
  },
});

export default store;
