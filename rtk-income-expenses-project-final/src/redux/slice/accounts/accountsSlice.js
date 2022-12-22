import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../../../utils/baseURL";

//initialState
const initialState = {
  account: {},
  accounts: [],
  error: null,
  loading: false,
  success: false,
  isUpdated: false,
};

//account to create account/project

export const createAccountAction = createAsyncThunk(
  "account/create",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    const { name, initialBalance, accountType, notes } = payload;
    try {
      //get the token
      const token = getState()?.users?.userAuth?.userInfo?.token;
      //pass the token to header
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      //make the request
      const { data } = await axios.post(
        `${baseURL}/accounts`,
        {
          name,
          accountType,
          notes,
          initialBalance,
        },
        config
      );
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

//account to create account/project

export const updateAccountAction = createAsyncThunk(
  "account/update",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    const { name, initialBalance, accountType, notes, id } = payload;
    try {
      //get the token
      const token = getState()?.users?.userAuth?.userInfo?.token;
      //pass the token to header
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      //make the request
      const { data } = await axios.put(
        `${baseURL}/accounts/${id}`,
        {
          name,
          accountType,
          notes,
          initialBalance,
        },
        config
      );
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

//get single account
export const getSingleAccountAction = createAsyncThunk(
  "account/get-details",
  async (id, { rejectWithValue, getState, dispatch }) => {
    try {
      //get the token
      const token = getState()?.users?.userAuth?.userInfo?.token;
      //pass the token to header
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      //make the request
      const { data } = await axios.get(
        `${baseURL}/accounts/${id}`,

        config
      );
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

//create slice
const accontsSlice = createSlice({
  name: "accounts",
  initialState,
  extraReducers: (builder) => {
    //create account
    builder.addCase(createAccountAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createAccountAction.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.account = action.payload;
    });
    builder.addCase(createAccountAction.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.account = null;
      state.error = action.payload;
    });
    //fetch single account
    builder.addCase(getSingleAccountAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSingleAccountAction.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.account = action.payload;
    });
    builder.addCase(getSingleAccountAction.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.account = null;
      state.error = action.payload;
    });

    //update account
    builder.addCase(updateAccountAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateAccountAction.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.isUpdated = true;
      state.account = action.payload;
    });
    builder.addCase(updateAccountAction.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.account = null;
      state.error = action.payload;
      state.isUpdated = false;
    });
  },
});

//Generate reducer
const accountsReducer = accontsSlice.reducer;

export default accountsReducer;
