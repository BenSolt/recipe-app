import React, { useState } from "react";
import ReactDOM from "react-dom";

import Notes from "./Notes";
import NoteForm from "./NoteForm";
import NoteSearch from './NoteSearch';

import data from "./data";

import "../../Note.css";

function PageHome() {
  const [notes, setNotes] = useState(data);

  const addNewNote = note => {
    setNotes([...notes, note]);
  };

  const [filter, setFilter] = useState("");
  const [filteredData, setFilteredData] = useState(data);



  function handleFilterChangeNote(f) {
    const fd = data.filter((data1) => {
      return data1.name.toLowerCase().includes(f.toLowerCase());
    });
    setFilteredData(fd);
    setFilter(f);
  }

  const filteredRecipes = data.filter(r => {
      return r.name.toLowerCase().includes(filter.toLowerCase());
    });

  return (
    <div className="NoteApp">
      <h1>My Notes</h1>
      <div className="test">
        <NoteForm addNewNote={addNewNote} />

        <NoteSearch filter={filter} onFilterChangeNote1={handleFilterChangeNote} />

        <Notes notesList={notes} />
        {filteredRecipes.map(recip => (
          <div className="note" key={recip.id} >
            <h2>{recip.name}</h2>
            <h4>{recip.body}</h4>
          </div>
        ))}  
      </div>
   
    </div>
  );
}
export default PageHome;