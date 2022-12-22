import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import apiURL from "../../utils/apiURL";

//initialState
const initialState = {
  posts: [],
  loading: false,
  error: "",
};

//actions for fetch all posts
export const fetchPosts = createAsyncThunk(
  "posts/fetch",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const res = await axios.get(apiURL);
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.status);
    }
  }
);

//Search post Action
export const searchPost = createAsyncThunk(
  "posts/search",
  async (id, { rejectWithValue, getState, dispatch }) => {
    try {
      const res = await axios.get(`${apiURL}/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.status);
    }
  }
);
//slice
const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    //handle actions
    //pending
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = true;
    });
    //fulfilled
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    });
    //Rejected
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.payload;
    });
    //search post
    builder.addCase(searchPost.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(searchPost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = [action.payload];
    });
    builder.addCase(searchPost.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.payload;
    });
  },
});

//Generate reducer
const postsReducer = postsSlice.reducer;

export default postsReducer;
