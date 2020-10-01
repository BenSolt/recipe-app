import React, {useState} from "react";

const SearchRecipeForm = (props) => {

  return (
    <div>
        <form>
            <input 
            className="Input2"
            type="text"
            value={props.filter}
            onChange={props.onFilterChange}
            name="name"
            placeholder="Search Recipe"
            autoComplete="off"
            />
        </form>
    </div>
    )
};

export default SearchRecipeForm;