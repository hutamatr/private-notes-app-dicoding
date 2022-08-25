import React from "react";

const Navigation = () => {
  return (
    <header className="bg-custom-black top-0 w-full sticky z-10">
      <nav className="flex flex-row justify-between items-center p-4 max-w-5xl mx-auto">
        <h1 className="text-custom-black font-medium text-2xl bg-custom-green p-1 rounded-sm ring-2 ring-custom-black">
          Notes.
        </h1>
      </nav>
    </header>
  );
};

export default Navigation;
