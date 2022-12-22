const redux = require("redux");
const { createStore } = redux;
//Add Post Action Type
const ADD_POST = "ADD_POST";
const REMOVE_POST = "REMOVE_POST";

//Post initial state
const initialState = {
  posts: [],
};

//Add Post Action Creator
const addPostAction = post => {
  return {
    type: ADD_POST,
    post,
  };
};

//Remove Post Action Creator
const removePostAction = id => {
  return {
    type: REMOVE_POST,
    id,
  };
};

//Post Reducer
postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        posts: [...state.posts, action.post],
      };
    case REMOVE_POST:
      return {
        posts: state.posts.filter(post => post.id !== action.id),
      };
    default:
      return state;
  }
};

//Post store
const store = createStore(postsReducer);

//Subscribe: It means that whenever the state changes, the callback function will be called.
const unSubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//Dispatch
store.dispatch(addPostAction({ id: 1, title: "Post 1" }));
store.dispatch(addPostAction({ id: 2, title: "Post 2" }));

store.dispatch(removePostAction(1));

unSubscribe();
