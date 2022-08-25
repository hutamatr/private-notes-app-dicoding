import React from "react";

import NotesForm from "./NotesForm";
import NotesList from "./NotesList";

const Main = () => {
  return (
    <main className="px-6 py-8 flex flex-col gap-y-12 max-w-5xl mx-auto">
      <section className="flex flex-col gap-y-6 p-4 rounded md:w-1/2 md:translate-x-1/2">
        <h1 className="text-custom-black text-center font-medium text-2xl bg-custom-green max-w-fit mx-auto p-1 rounded-sm ring-2 ring-custom-black">
          Create Notes
        </h1>
        <NotesForm />
      </section>
      <NotesList />
    </main>
  );
};

export default Main;
