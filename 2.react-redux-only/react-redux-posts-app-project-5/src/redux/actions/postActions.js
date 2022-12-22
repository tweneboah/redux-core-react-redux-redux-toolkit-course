import axios from "axios";
import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  SEARCH_POST_FAILURE,
  SEARCH_POST_REQUEST,
  SEARCH_POST_SUCCESS,
} from "./postActionTypes";
const apiURL = "https://jsonplaceholder.typicode.com/posts";
//Actions Creators
//1. fetch posts (request started, success, error)

//request started
const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};

//success
const fetchPostsSuccess = posts => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};

//error action creator
const fetchPostsErr = error => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  };
};

//fetch posts action
export const fetchPostsAction = () => {
  return async dispatch => {
    //request action
    dispatch(fetchPostsRequest());
    try {
      //make http request
      const res = await axios.get(apiURL);
      //success action
      dispatch(fetchPostsSuccess(res.data));
    } catch (error) {
      //error action
      dispatch(fetchPostsErr(error));
    }
  };
};

//2. fetch post (request started, success, error)
//request action
const fetchPostRequest = () => {
  return {
    type: SEARCH_POST_REQUEST,
  };
};
//success
const fetchPostSuccess = post => {
  return {
    type: SEARCH_POST_SUCCESS,
    payload: post,
  };
};

//error action creator
const fetchPostErr = error => {
  return {
    type: SEARCH_POST_FAILURE,
    payload: error,
  };
};

//single post action
export const fetchPostAction = id => {
  return async dispatch => {
    dispatch(fetchPostRequest());
    try {
      //make http request
      const res = await axios.get(`${apiURL}/${id}`);
      //success
      dispatch(fetchPostSuccess(res.data));
    } catch (error) {
      dispatch(fetchPostErr(error));
    }
  };
};
