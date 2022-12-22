import { ADD_NOTE, DELETE_NOTE, FETCH_NOTES } from "./notesActionTypes";

//actions
//Add note action creator
export const addNoteAction = note => {
  return {
    type: ADD_NOTE,
    payload: note,
  };
};
//Delete note action creator
export const deleteNoteAction = id => {
  return {
    type: DELETE_NOTE,
    payload: id,
  };
};
//Fetch notes action creator
export const fetchNotesAction = () => {
  return {
    type: FETCH_NOTES,
  };
};
//store
//dispatch
