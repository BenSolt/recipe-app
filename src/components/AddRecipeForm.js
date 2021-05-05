import React from "react";

function AddRecipeForm(props) {

  return (
    <div>
      {/* props called from RECIPELIST */}
      <form onSubmit={props.addRecipe1}>
      {/* <form onSubmit={()=>props.addRecipe1()}> */}
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
          value={props.ingredients1}
          onChange={props.onChange1}
        />
        <button className="BtnAddRecipe" >Add Recipe</button>

      </form>
    </div>
  );
}

export default AddRecipeForm;