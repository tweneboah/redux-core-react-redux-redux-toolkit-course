import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  SEARCH_POST_FAILURE,
  SEARCH_POST_REQUEST,
  SEARCH_POST_SUCCESS,
} from "../actions/postActionTypes";

//initial state
const initialState = {
  loading: false,
  error: "",
  posts: [],
  post: {},
};

//reducers
export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    //success
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    //error
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        posts: [],
        error: action.payload,
        loading: false,
      };
    //========SEARCH SINGLE POST =======
    case SEARCH_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_POST_SUCCESS:
      return {
        ...state,
        posts: [action.payload],
        loading: false,
      };
    case SEARCH_POST_FAILURE:
      return {
        ...state,
        posts: [],
        error: action.payload,
        loading: false,
      };
    //return default state
    default:
      return state;
  }
};
//store
