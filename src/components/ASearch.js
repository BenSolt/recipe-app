import React from "react";


function ASearch(props) {
    function handleChange(e) {
      props.onFilterChange(e.target.value);
    }
  
    return (
      <div>
        <input
          className="Input"
          type="text"
          placeholder="Search"
          value={props.filter}
          onChange={handleChange}
        />
      </div>
    );
  }

export default ASearch; 