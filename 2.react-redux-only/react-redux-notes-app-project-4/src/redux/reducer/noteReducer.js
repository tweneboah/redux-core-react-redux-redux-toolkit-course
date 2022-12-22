import {
  ADD_NOTE,
  DELETE_NOTE,
  FETCH_NOTES,
} from "../actions/notesActionTypes";

//Initialstate
const initialstate = {
  notes: [],
};

//note reducer
const notesReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_NOTE:
      //new note
      const newNote = {
        id: Math.random(),
        title: action.payload.title,
        content: action.payload.content,
      };
      //add note into storage
      const updatedNotes = [...state.notes, newNote];
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      return {
        notes: [...state.notes, newNote],
      };
    //fetch notes
    case FETCH_NOTES:
      return {
        notes: JSON.parse(localStorage.getItem("notes"))
          ? JSON.parse(localStorage.getItem("notes"))
          : [],
      };
    //Delete note
    case DELETE_NOTE:
      const filteredNotes = state.notes.filter(
        note => note.id !== action.payload
      );
      //Resave to localstorage
      localStorage.setItem("notes", JSON.stringify(filteredNotes));
      return {
        ...state,
        notes: filteredNotes,
      };
    default:
      return state;
  }
};

export default notesReducer;
