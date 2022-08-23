import React from "react";

import NotesCard from "../UI/NotesCard";

const NotesList = ({ onNotesData, onDeleteNotes }) => {
  return (
    <section>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {onNotesData.map((note, index) => {
          return (
            <li key={index}>
              <NotesCard {...note} onDeleteNotes={onDeleteNotes} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default NotesList;
