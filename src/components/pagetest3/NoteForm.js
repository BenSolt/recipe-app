import React, { useState } from "react";

const NoteForm = props => {
  const [note, setNote] = useState({ title: "", body: "" });
  const changeHandler = event => {
    //computed properties
    console.log(event.target.value);
    setNote({ ...note, [event.target.name]: event.target.value });
  };
  const submitForm = event => {
    event.preventDefault();
    const newNote = {
      ...note,
      id: Date.now()
    };
    props.addNewNote(newNote);
    setNote({ title: "", body: "" });
  };
  return (
   
      <form className='NoteForm' onSubmit={submitForm}>
        <label htmlFor="title">Note Title</label>
        <input
          type="text"
          name="name"
          placeholder="note title"
          value={note.name}
          onChange={changeHandler}
        />
        <label htmlFor="body">Note body</label>
        <textarea
          name="body"
          placeholder="Type your note here"
          value={note.body}
          onChange={changeHandler}
        />
        <button type="submit">Add note</button>
      </form>

  );
};

export default NoteForm;