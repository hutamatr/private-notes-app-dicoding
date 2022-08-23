import React, { useState } from "react";

import NotesForm from "./NotesForm";
import NotesList from "./NotesList";
import { getInitialData } from "../../utils";

const Main = () => {
  const [notesData, setNotesData] = useState(getInitialData);

  const notesDataHandler = (notes) => {
    setNotesData((prevState) => {
      return [notes, ...prevState];
    });
  };

  return (
    <>
      <section className="flex flex-col gap-y-4 bg-custom-white p-4 rounded-md shadow-material-shadow">
        <h1 className="text-custom-orange text-center font-medium text-2xl">
          Notes
        </h1>
        <NotesForm onSetNotesData={notesDataHandler} />
      </section>
      <NotesList onNotesData={notesData} />
    </>
  );
};

export default Main;
