import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import NotesProvider from "./context/NotesProvider";

import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NotesProvider>
      <App />
    </NotesProvider>
  </React.StrictMode>
);
