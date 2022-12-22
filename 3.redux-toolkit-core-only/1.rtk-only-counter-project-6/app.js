//configure store
const { configureStore, createSlice } = require("@reduxjs/toolkit");

//state for counter
const initialState = {
  counter: 0,
};

//Slice
const counterSlice = createSlice({
  name: "counter", //name of the slice
  initialState,
  reducers: {
    increment: state => {
      state.counter += 1;
    },
    decrement: state => {
      state.counter -= 1;
    },

    incrementByAmount: (state, action) => {
      state.counter += action.payload;
    },
    reset: state => {
      state.counter = 0;
    },
  },
  //extra reducers method 1
  //   extraReducers: {
  //     "notes/addNote": (state, action) => {
  //       state.counter += 1;
  //     },
  //   },
  //The key we specify in the extraReducers object is the action name and the value in a differeent createSlice that we want to listen to

  //extra reducers method 2 (Most recommended)
  extraReducers: builder => {
    builder.addCase("notes/addNote", (state, action) => {
      state.counter += 1;
    });
  },
});

//Export actions
const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;

//reducers
const counterReducer = counterSlice.reducer;

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

//subscribe to store
const unSubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//dispatch actions
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(incrementByAmount(10));

//unsubscribe
unSubscribe();
