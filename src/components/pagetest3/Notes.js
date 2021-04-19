import React from "react";

const Notes = props => {
  console.log(props);
  return (
    <div className="note-list">
      {props.notesList.map(note => {
        return (
          <div className="note" key={note.id}>
            <h2>{note.name}</h2>
            <p>{note.body}</p>
          </div>
        );
      })}

    </div>
  );
};
export default Notes;