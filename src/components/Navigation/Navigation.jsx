import React, { useState } from "react";

const Navigation = () => {
  const [inputSearch, setInputSearch] = useState("");

  const inputSearchHandler = (event) => {
    setInputSearch(event.target.value);
  };

  const inputSearchSubmitHandler = () => {};

  return (
    <header className="bg-custom-black top-0 w-full sticky z-10">
      <nav className="flex flex-col gap-y-2 md:flex-row justify-between items-center p-4 max-w-5xl mx-auto">
        <h1 className="text-custom-black font-medium text-2xl bg-custom-green p-1 rounded-sm ring-2 ring-custom-black">
          Notes.
        </h1>
        <form onSubmit={inputSearchSubmitHandler}>
          <input
            type="text"
            className="outline-none p-2 rounded bg-custom-green text-custom-black font-medium placeholder:font-light placeholder:text-slate-400"
            placeholder="Search notes"
            value={inputSearch}
            onChange={inputSearchHandler}
          />
        </form>
      </nav>
    </header>
  );
};

export default Navigation;
