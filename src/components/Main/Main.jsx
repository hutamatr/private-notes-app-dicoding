import React, { useState } from "react";

import NotesForm from "./NotesForm";
import NotesList from "./NotesList";
import { getInitialData } from "../../utils";

const Main = () => {
  const [notesData, setNotesData] = useState(getInitialData);

  const notesDataHandler = (notes) => {
    setNotesData((prevState) => {
      return [...prevState, notes];
    });
  };

  const notesDeleteHandler = (id) => {
    const notesDeleted = notesData.filter((note) => note.id !== id);
    setNotesData(notesDeleted);
  };

  console.table(notesData);

  return (
    <>
      <section className="flex flex-col gap-y-6 p-4 rounded md:w-1/2 md:translate-x-1/2">
        <h1 className="text-custom-black text-center font-medium text-2xl bg-custom-green max-w-fit mx-auto p-1 rounded-sm ring-2 ring-custom-black">
          Notes
        </h1>
        <NotesForm onSetNotesData={notesDataHandler} />
      </section>
      <NotesList onNotesData={notesData} onDeleteNotes={notesDeleteHandler} />
    </>
  );
};

export default Main;
