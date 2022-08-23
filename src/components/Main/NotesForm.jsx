import React, { useState } from "react";

const NotesForm = ({ onSetNotesData }) => {
  const [notesInput, setNotesInput] = useState({
    title: "",
    body: "",
  });

  const id = +new Date();
  const date = new Date().toISOString();

  const titleChangeHandler = (event) =>
    setNotesInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });

  const bodyChangeHandler = (event) => {
    setNotesInput((prevState) => {
      return { ...prevState, body: event.target.value };
    });
  };

  const notesSubmitHandler = (event) => {
    event.preventDefault();

    if (notesInput.title.length < 1 || notesInput.body.length < 1) {
      return;
    }

    const notes = {
      id,
      archived: false,
      createdAt: date,
      ...notesInput,
    };

    onSetNotesData(notes);
    setNotesInput({
      title: "",
      body: "",
    });
  };
  return (
    <form onSubmit={notesSubmitHandler} className="flex flex-col gap-y-3 ">
      <label htmlFor="title" className="text-custom-green">
        Title
      </label>
      <input
        type="text"
        onChange={titleChangeHandler}
        value={notesInput.title}
        className="rounded-md p-2 outline-none"
      />
      <label htmlFor="notes-body" className="text-custom-green">
        Notes
      </label>
      <textarea
        name="notes-body"
        type="text"
        id="notes-body"
        cols="30"
        rows="5"
        onChange={bodyChangeHandler}
        value={notesInput.body}
        className="rounded-md p-2 outline-none"
      ></textarea>
      <button className="bg-custom-green py-2 px-4 rounded-md max-w-fit mx-auto hover:bg-custom-orange duration-500">
        Submit
      </button>
    </form>
  );
};

export default NotesForm;
