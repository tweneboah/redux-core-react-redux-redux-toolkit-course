const {
  createAsyncThunk,
  createSlice,
  configureStore,
} = require("@reduxjs/toolkit");
const axios = require("axios");

const API = "https://jsonplaceholder.typicode.com/posts";

//Initial state
const initialState = {
  posts: [],
  loading: false,
  error: null,
};
//create Async Thunk
const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const res = await axios.get(API);
  return res.data; //grabbing the data only
});
//slice

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    //Handle lifecycle - pending-success, rejected
    //pending
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = true;
    });
    //fulfilled
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    });
    //rejected
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.posts = [];
      state.loading = false;
      state.error = action.payload;
    });
  },
});

//generate reducer
const postsReducer = postsSlice.reducer;

//store
const store = configureStore({
  reducer: postsReducer,
});

//dispatch
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchPosts());
