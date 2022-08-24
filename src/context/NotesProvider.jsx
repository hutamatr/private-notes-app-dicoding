import React, { useReducer } from "react";
import NotesContext from "./NotesContext";

import { getInitialData } from "../utils/index";

const initNotes = getInitialData();

const initState = {
  notes: [...initNotes],
};

const notesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTES":
      const addedNotes = [...state.notes, action.payload];
      return {
        notes: addedNotes,
      };

    case "ARCHIVE_NOTES":
      const existingNotesItemIndex = state.notes.findIndex((note) => {
        return note.id === action.payload.id;
      });
      const existingNoteItem = state.notes[existingNotesItemIndex];

      let archivedNotes = null;

      if (existingNoteItem) {
        archivedNotes = [...state.notes];
        archivedNotes[existingNotesItemIndex] = action.payload;
      }
      return {
        notes: archivedNotes,
      };

    case "DELETE_NOTES":
      const deletedNotes = state.notes.filter((note) => {
        return note.id !== action.payload;
      });
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

  const archivedNotesHandler = (noteItem) => {
    dispatchNotes({ type: "ARCHIVE_NOTES", payload: noteItem });
  };

  const deleteNotesHandler = (id) => {
    dispatchNotes({ type: "DELETE_NOTES", payload: id });
  };

  const value = {
    notes: notesState.notes,
    addNotes: addNotesHandler,
    deleteNotes: deleteNotesHandler,
    archivedNotes: archivedNotesHandler,
  };

  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};

export default NotesProvider;
