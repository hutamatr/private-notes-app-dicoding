import React, { useContext } from "react";

import { showFormattedDate } from "../../utils";
import NotesContext from "../../context/NotesContext";

const Card = ({ id, title, body, createdAt, archived }) => {
  const { deleteNotes, archivedNotes, notes } = useContext(NotesContext);

  const notesArchivedHandler = () => {
    let archivedNote;
    for (const note of notes) {
      if (note.id === id) {
        archivedNote = { ...note, archived: !archived };
      }
    }
    archivedNotes(archivedNote);
  };

  const deleteNotesHandler = () => {
    deleteNotes(id);
  };

  return (
    <div
      className={`grid grid-cols-1 grid-rows-[auto,1fr,auto] gap-y-3 items-start rounded bg-custom-green p-4 shadow-material-shadow min-h-full ${
        archived ? "ring-2 ring-custom-black" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-x-3">
        <h2 className="text-md font-semibold overflow-auto break-all">
          {title}
        </h2>
        {archived && (
          <span className="text-xs font-medium uppercase bg-custom-black text-custom-green p-1 rounded-sm">
            Archived!
          </span>
        )}
      </div>
      <p className="text-sm overflow-auto break-words">{body}</p>
      <div className="flex flex-row items-center justify-between">
        <span className="text-xs bg-custom-black text-custom-green p-1 rounded-sm">
          {showFormattedDate(createdAt)}
        </span>
        <div className="flex items-center gap-x-3 text-3xl">
          <button
            onClick={notesArchivedHandler}
            className={`text-sm font-medium ${
              archived
                ? "text-custom-green px-1 rounded-sm bg-custom-black"
                : "text-custom-black"
            }`}
          >
            Archive
          </button>
          <button
            onClick={deleteNotesHandler}
            className="text-red-700 text-sm font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
