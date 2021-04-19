import React, { useState} from "react";


function AEdit(props) {
    const [edit, setEdit] = useState("");
  
    const handleSubmit = (e) => {
      props.onEditSubmit(edit);
      setEdit("");
    };
  
    return (
      <div>
        <input
          className="Input"
          type="text"
          placeholder="Add"
          value={edit}
          onChange={(e) => setEdit(e.target.value)}
        />
        <input type="submit" onClick={handleSubmit}/>
        
      </div>
    );
  }



export default AEdit; 