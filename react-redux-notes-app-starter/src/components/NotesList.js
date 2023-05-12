import React, { useEffect } from "react";

import "./NotesList.css";

const NotesList = () => {
  return (
    <>
      <h1>Notes List</h1>

      <div key={note.id} className="item-container">
        <div className="item-content">
          <h2>some title</h2>
          <p>some content</p>
          <button>Delete</button>
        </div>
      </div>
    </>
  );
};

export default NotesList;
