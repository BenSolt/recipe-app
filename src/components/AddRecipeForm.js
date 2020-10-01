import React, {useState} from "react";

function AddRecipeForm(props) {

    return (
      <div>
        <form onSubmit={props.addRecipe1}>
            <input
              className="Input"
              type="text"
              name="name"
              required
              placeholder="Enter Recipe"
              value={props.valu}
              onChange={props.onChang}
            />
            <button className="BtnAddRecipe" >Add Recipe</button>
            
        </form>
      </div>
    );
  }

export default AddRecipeForm;