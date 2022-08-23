import React from "react";

import Card from "../UI/Card";
import { showFormattedDate } from "../../utils";

const NotesList = ({ onNotesData }) => {
  return (
    <section>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {onNotesData.map((note, index) => {
          return (
            <li key={index}>
              <Card {...note} onFormatDate={showFormattedDate} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default NotesList;
