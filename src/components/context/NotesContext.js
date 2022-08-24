import { createContext } from "react";

const NotesContext = createContext({
  notes: [],
  addNotes: (noteItem) => {},
  deleteNotes: (id) => {},
});

export default NotesContext;
