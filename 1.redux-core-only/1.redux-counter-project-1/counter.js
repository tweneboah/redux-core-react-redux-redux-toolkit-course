const redux = require("redux");
const { createStore } = redux;

//Counter Action Types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_BY_AMT = "INCREMENT_BY_AMT";

//Counter initial state
const initialState = {
  count: 0,
};
{
  type: "Add";
}
//Counter Action Creators
const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};

const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};

const resetAction = () => {
  return {
    type: RESET,
  };
};

const incrementByAmtAction = (amt) => {
  return {
    type: INCREMENT_BY_AMT,
    payload: amt,
  };
};

//Counter Reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        count: state.count - 1,
      };
    case RESET:
      return {
        count: 0,
      };
    case INCREMENT_BY_AMT:
      return {
        count: state.count + action.payload,
      };
    default:
      return state;
  }
};

//Counter store
const store = createStore(counterReducer);

//Subscribe: It means that whenever the state changes, the callback function will be called.

const unSubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//Dispatch
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementByAmtAction(5));
