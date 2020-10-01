import React, {useState} from "react";

function AddRecipeForm(props) {

    return (
    <form onSubmit={props.addRecipe1} className='Formholder'>
        <input
          className="Input"
          type="text"
          name="name"
          required
          placeholder="Enter Recipe"
          value={props.v}
          onChange={props.onC}
        />
        <button className="BtnAddRecipe" >Add Recipe</button>
        
    </form>
    );
  }

export default AddRecipeForm;