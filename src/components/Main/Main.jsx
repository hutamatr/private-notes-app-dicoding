import React, { useState } from "react";

import NotesForm from "./NotesForm";
import NotesList from "./NotesList";
import { getInitialData } from "../../utils";

const Main = () => {
  const [notesData, setNotesData] = useState(getInitialData);
  const [notesArchived, setNotesArchived] = useState([]);
  const [isNotesArchived, setIsNotesArchived] = useState(false);

  const notesDataHandler = (notes) => {
    setNotesData((prevState) => {
      return [...prevState, notes];
    });
  };

  const notesDeleteHandler = (id) => {
    const notesDeleted = notesData.filter((note) => note.id !== id);
    setNotesData(notesDeleted);
  };

  const notesArchivedHandler = (notesId) => {
    setIsNotesArchived((prevState) => !prevState);
    let notesArchivedData;
    for (const note of notesData) {
      if (note.id === notesId) {
        notesArchivedData = { ...note, archived: !isNotesArchived };
      }
    }
    setNotesArchived(notesArchivedData);
  };

  console.table(notesData);

  return (
    <main className="px-6 py-8 flex flex-col gap-y-4 max-w-5xl mx-auto">
      <section className="flex flex-col gap-y-6 p-4 rounded md:w-1/2 md:translate-x-1/2">
        <h1 className="text-custom-black text-center font-medium text-2xl bg-custom-green max-w-fit mx-auto p-1 rounded-sm ring-2 ring-custom-black">
          Create Notes
        </h1>
        <NotesForm onSetNotesData={notesDataHandler} />
      </section>
      <NotesList
        onNotesData={notesData}
        onNotesArchived={notesArchived}
        onDeleteNotesHandler={notesDeleteHandler}
        onNotesArchivedHandler={notesArchivedHandler}
        onIsNotesArchived={isNotesArchived}
      />
    </main>
  );
};

export default Main;
