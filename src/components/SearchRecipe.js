import React, {useState} from "react";

const SearchRecipe = (props) => {

  return (
    <div>


        <form className='Formholder'>

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

export default SearchRecipe;