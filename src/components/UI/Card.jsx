import React, { useState } from "react";

const Card = ({ title, body, createdAt, archived, onFormatDate }) => {
  const [notesCompleted, setNotesCompleted] = useState(archived);

  const notesArchivedHandler = () => {
    setNotesCompleted((prevState) => !prevState);
  };

  const notesDeleteHandler = () => {};

  return (
    <div
      className={`grid grid-cols-1 grid-rows-[auto,1fr,auto] gap-y-3 items-start rounded-lg bg-custom-white p-4 shadow-material-shadow min-h-full ${
        notesCompleted ? "ring-2 ring-custom-green" : ""
      }`}
    >
      <div className="flex items-center justify-between gap-x-3">
        <h2 className="text-lg font-semibold">{title}</h2>
        {notesCompleted ? (
          <span className="text-sm font-medium uppercase text-custom-green">
            Archived!
          </span>
        ) : (
          <span className="text-sm font-medium uppercase text-custom-orange whitespace-nowrap">
            In Progress
          </span>
        )}
      </div>
      <p className="">{body}</p>
      <div className="flex flex-row items-center justify-between">
        <>
          <span className="text-xs">{onFormatDate(createdAt)}</span>
        </>
        <div className="flex items-center gap-x-3 text-3xl">
          <button
            onClick={notesArchivedHandler}
            className={`text-base ${
              notesCompleted ? "text-custom-green" : "text-custom-orange"
            }`}
          >
            Archive
          </button>
          <button
            onClick={notesDeleteHandler}
            className="text-red-700 text-base"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
