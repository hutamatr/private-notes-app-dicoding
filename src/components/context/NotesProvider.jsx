import React, { useReducer } from "react";
import NotesContext from "./NotesContext";

const initState = {
  notes: [],
};

const notesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTES":
      const addedNotes = [...state.notes, ...action.payload];
      return {
        notes: addedNotes,
      };
    case "DELETE_NOTES":
      const deletedNotes = {};
      return {
        notes: deletedNotes,
      };
    default:
      return initState;
  }
};

const NotesProvider = ({ children }) => {
  const [notesState, dispatchNotes] = useReducer(notesReducer, initState);

  const addNotesHandler = (noteItem) => {
    dispatchNotes({ type: "ADD_NOTES", payload: noteItem });
  };

  const deleteNotesHandler = (id) => {
    dispatchNotes({ type: "DELETE_NOTES", payload: id });
  };

  const value = {
    notes: notesState.notes,
    addNotes: addNotesHandler,
    deleteNotes: deleteNotesHandler,
  };

  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};

export default NotesProvider;
