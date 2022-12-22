const { applyMiddleware, createStore } = require("redux");
const axios = require("axios");
const thunkMiddleware = require("redux-thunk").default;

//Post action types
const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";

//Async action creator
const fetchPostRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};

//success action creator
const fetchPostSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};

//failure action creator
const fetchPostFailure = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  };
};

//Async action creator
const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(fetchPostRequest());
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch(fetchPostSuccess(response));
    } catch (error) {
      dispatch(fetchPostFailure(error.message));
    }
  };
};

//Post reducer
const postReducer = (
  state = { posts: [], loading: false, error: "" },
  action
) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: "",
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        posts: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

//store
const store = createStore(postReducer, applyMiddleware(thunkMiddleware));

//subscribe
store.subscribe(() => {
  console.log(store.getState().posts);
});

//dispatch
store.dispatch(fetchPosts());
