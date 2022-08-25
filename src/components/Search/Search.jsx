import React, { useState, useEffect, useContext } from "react";

import NotesContext from "../../context/NotesContext";

const Search = ({ onSetSearch }) => {
  const { notes } = useContext(NotesContext);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    const searchResult = notes.filter((note) =>
      note.title.toLowerCase().includes(inputSearch.toLowerCase())
    );
    onSetSearch(searchResult);
  }, [inputSearch, notes, onSetSearch]);

  const inputSearchHandler = (event) => {
    setInputSearch(event.target.value);
  };

  return (
    <form className="border-b-2 border-b-custom-black mx-auto max-w-fit flex flex-row items-center justify-center">
      <input
        type="text"
        className="outline-none p-2 rounded w-full bg-custom-white text-custom-black font-medium placeholder:text-custom-black"
        placeholder="Search title"
        value={inputSearch}
        onChange={inputSearchHandler}
      />
    </form>
  );
};

export default Search;
