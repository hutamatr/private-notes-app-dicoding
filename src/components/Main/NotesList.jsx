import React, { useState } from "react";

import NotesCard from "../UI/NotesCard";

const NotesList = ({
  onNotesData,
  onNotesArchived,
  onNotesArchivedHandler,
  onIsNotesArchived,
  onDeleteNotesHandler,
}) => {
  return (
    <section className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-4">
        <h1 className="bg-custom-black text-custom-green text-xl max-w-fit px-1 rounded-sm">
          Active notes
        </h1>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {onNotesData.map((note, index) => {
            return (
              <li key={index}>
                <NotesCard
                  {...note}
                  onDeleteNotes={onDeleteNotesHandler}
                  onNotesArchivedHandler={onNotesArchivedHandler}
                  onIsNotesArchived={onIsNotesArchived}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-y-4">
        <h1 className="bg-custom-black text-custom-green text-xl max-w-fit px-1 rounded-sm">
          Archived notes
        </h1>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {onNotesArchived?.map((note, index) => {
            return (
              <li key={index}>
                <NotesCard {...note} onDeleteNotes={onDeleteNotesHandler} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default NotesList;
