// This will take all the logic

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";

// this will take all the reducers
//   then combine all reducers
//     and add it in main root reducer

const store = configureStore({
  reducer: counterReducer,
});

export default store;
