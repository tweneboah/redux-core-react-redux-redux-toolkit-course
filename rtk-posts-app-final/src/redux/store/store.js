import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../slice/postsSlice";

//store

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export default store;
