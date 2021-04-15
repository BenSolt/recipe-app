import React from "react";

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
          value={props.name1}
          onChange={props.onChange1}
        />

        <input
          className="Input"
          type="text"
          name="ingredients"
          required
          placeholder="Enter ingredients"
          onChange={props.onChange1}
        />
        <button className="BtnAddRecipe" >Add Recipe</button>

      </form>
    </div>
  );
}

export default AddRecipeForm;