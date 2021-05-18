import React from "react";

const SearchRecipeForm = (props) => {

  return (
    <div>
        <form>
            <input 
            className="Input2"
            type="text"
            value={props.filter1}
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