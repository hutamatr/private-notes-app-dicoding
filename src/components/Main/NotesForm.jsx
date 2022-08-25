import React, { useState, useEffect, useContext } from "react";

import NotesContext from "../../context/NotesContext";

const NotesForm = () => {
  const { addNotes } = useContext(NotesContext);
  const [notesInput, setNotesInput] = useState({
    title: "",
    body: "",
  });
  const [isFormEmpty, setIsFormEmpty] = useState(false);

  const id = +Date.now();
  const date = new Date().toISOString();

  useEffect(() => {
    setIsFormEmpty(false);
  }, [notesInput]);

  const titleChangeHandler = (event) =>
    setNotesInput((prevState) => {
      return {
        ...prevState,
        title:
          event.target.value.length <= 50
            ? event.target.value
            : prevState.title,
      };
    });

  const bodyChangeHandler = (event) => {
    setNotesInput((prevState) => {
      return { ...prevState, body: event.target.value };
    });
  };

  const notesSubmitHandler = (event) => {
    event.preventDefault();

    if (notesInput.title.length < 1 || notesInput.body.length < 1) {
      return setIsFormEmpty(true);
    }

    const notes = {
      id,
      archived: false,
      createdAt: date,
      ...notesInput,
    };

    addNotes(notes);

    setNotesInput({
      title: "",
      body: "",
    });
    setIsFormEmpty(false);
  };
  return (
    <>
      {isFormEmpty && (
        <p className="text-lg text-red-700 font-semibold text-center">
          Please input notes correctly!
        </p>
      )}
      <form onSubmit={notesSubmitHandler} className="flex flex-col gap-y-3 ">
        <div className="flex flex-row items-end gap-x-2 justify-between">
          <label
            htmlFor="title"
            className="text-custom-green bg-custom-black px-1 rounded-sm"
          >
            Title
          </label>
          <p className="text-xs flex flex-row items-center gap-x-1 text-custom-green bg-custom-black px-1 rounded-sm break-words font-semibold">
            {50 - notesInput.title.length}
          </p>
        </div>
        <input
          type="text"
          onChange={titleChangeHandler}
          value={notesInput.title}
          className="rounded-md p-2 outline-none bg-white ring-2 ring-custom-black"
        />
        <label
          htmlFor="notes-body"
          className="text-custom-green bg-custom-black px-1 rounded-sm max-w-fit"
        >
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
          className="rounded-md p-2 outline-none bg-custom-primary ring-2 ring-custom-black"
        ></textarea>
        <button className="bg-custom-black text-custom-green py-2 px-4 rounded max-w-fit mx-auto hover:bg-custom-green hover:text-custom-black hover:font-medium duration-300">
          Submit
        </button>
      </form>
    </>
  );
};

export default NotesForm;
