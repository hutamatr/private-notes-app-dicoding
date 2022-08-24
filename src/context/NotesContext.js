import { createContext } from "react";

const NotesContext = createContext({
  notes: [],
  addNotes: (noteItem) => {},
  deleteNotes: (id) => {},
  archivedNotes: (noteItem) => {},
});

export default NotesContext;
