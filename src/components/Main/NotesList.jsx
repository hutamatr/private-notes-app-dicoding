import React, { useContext } from "react";

import NotesCard from "../UI/NotesCard";
import NotesContext from "../../context/NotesContext";

const NotesList = () => {
  const { notes } = useContext(NotesContext);

  const notesActive = notes.filter((note) => !note.archived);
  const notesArchived = notes.filter((note) => note.archived);

  const notesContentList = (notesData) => {
    return (
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {notesData.map((note, index) => {
          return (
            <li key={index}>
              <NotesCard {...note} />
            </li>
          );
        })}
      </ul>
    );
  };

  const notesContent = [
    {
      name: "Active Notes",
      data: notesActive,
      list: notesContentList(notesActive),
      emptyMessage: "Active notes is Empty.",
    },
    {
      name: "Archived Notes",
      data: notesArchived,
      list: notesContentList(notesArchived),
      emptyMessage: "Archived notes is Empty.",
    },
  ];

  return (
    <section className="flex flex-col gap-y-12">
      {notesContent.map((content, index) => {
        return (
          <div className="flex flex-col gap-y-4" key={index}>
            <h1 className="bg-custom-black text-custom-green text-2xl max-w-fit px-1 rounded-sm">
              {content.name}
            </h1>
            {content.data.length === 0 ? (
              <p className="text-center my-12 font-semibold bg-custom-green ring-2 ring-custom-black max-w-fit mx-auto max-h-min px-1">
                {content.emptyMessage}
              </p>
            ) : (
              content.list
            )}
          </div>
        );
      })}
    </section>
  );
};

export default NotesList;
