import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../../../utils/baseURL.js";

//initial state
const initialState = {
  loading: false,
  error: null,
  users: [],
  user: {},
  profile: {},
  userAuth: {
    loading: false,
    error: null,
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};

//create action creator  - createAsyncThunk
//register
export const registerUserAction = createAsyncThunk(
  "user/register",
  async (
    { fullname, password, email },
    { rejectWithValue, getState, dispatch }
  ) => {
    try {
      //header
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        `${baseURL}/users/register`,
        {
          fullname,
          email,
          password,
        },
        config
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//login
export const loginUserAction = createAsyncThunk(
  "user/login",
  async ({ password, email }, { rejectWithValue, getState, dispatch }) => {
    try {
      //header
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        `${baseURL}/users/login`,
        {
          email,
          password,
        },
        config
      );
      //save user localstorage
      localStorage.setItem("userInfo", JSON.stringify(res.data));
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//logout
export const logOutUserAction = createAsyncThunk("user/logout", async () => {
  //remove user from localstorage
  localStorage.removeItem("userInfo");
  return null;
});

//get profile
export const getProfileAction = createAsyncThunk(
  "users/getProfile",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState()?.users?.userAuth?.userInfo?.token;
      //get the token
      //pass the token to header
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      //make the request
      const { data } = await axios.get(`${baseURL}/users/profile`, config);
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

//users slice
const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    //register
    builder.addCase(registerUserAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(registerUserAction.fulfilled, (state, action) => {
      state.loading = false;
      state.userAuth.userInfo = action.payload;
    });
    builder.addCase(registerUserAction.rejected, (state, action) => {
      state.loading = false;
      state.userAuth.error = action.payload;
    });
    //login
    builder.addCase(loginUserAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginUserAction.fulfilled, (state, action) => {
      state.loading = false;
      state.userAuth.userInfo = action.payload;
    });
    builder.addCase(loginUserAction.rejected, (state, action) => {
      state.loading = false;
      state.userAuth.error = action.payload;
    });
    //logout
    builder.addCase(logOutUserAction.fulfilled, (state, action) => {
      state.loading = false;
      state.userAuth.userInfo = null;
    });
    //profile
    builder.addCase(getProfileAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProfileAction.fulfilled, (state, action) => {
      state.loading = false;
      state.profile = action.payload;
    });
    builder.addCase(getProfileAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.profile = "";
    });
  },
});

//generate reducer
const usersReducer = usersSlice.reducer;

export default usersReducer;
