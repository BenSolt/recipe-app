import React, { useState, useEffect } from "react";
import axios from "axios";
// import axiosWithAuth from '../utils/AxiosWithAuth';


const initialRecipe = {
  name: ""
};

const RecipeList = ({ recipes, updateRecipes }) => {
  console.log(recipes);
  const [editing, setEditing] = useState(false); 
  const [recipeToEdit, setRecipeToEdit] = useState(initialRecipe);
  const [newRecipe, setnewRecipe]=useState({name: ""})

  const [query, setQuery] = useState("");


  const filteredRecipes = recipes.filter(r => {
        return r.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

  const handleFilterChange = event => {
        setQuery(event.target.value);
    };  





    
// ////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

  const editRecipe = recip => {
    setEditing(true);
    setRecipeToEdit(recip);
  };

  const saveEdit = e => {
    e.preventDefault();

    // axiosWithAuth()
    axios
    .put(`https://recipe-organizer-app.herokuapp.com/char/${recipeToEdit.id}`, recipeToEdit)
     .then(res => {  
      updateRecipes(
        console.log('edit success?'),
        recipes.map(recip => {
          if (recip.id === res.data.id) {
            return res.data
          }else {
            return recip;
          }
        })
        
     )})
     .catch(err => console.log(err,'edit failed'));
    };


  const deleteRecipe = recip => {
    // axiosWithAuth()
    axios
      .delete(`https://recipe-organizer-app.herokuapp.com/char/${recip.id}`)
      .then(res => {
      console.log(recip, 'delete recipe')
      updateRecipes(recipes.filter(recip => recip.id !== res.data))
    })
      .catch(err => console.log(err, 'delete fail'));

  };

  const addRecipe = e => {
    e.preventDefault();
    // axiosWithAuth()
    axios
      .post('https://recipe-organizer-app.herokuapp.com/char', newRecipe)
      .then(res => {
        updateRecipes(res.data);
        setnewRecipe({
          name: ""
        });
      })
      .catch(err => console.log(err));
  };



  return (
    <div>

    <form onSubmit={addRecipe} className='Formholder'>
        <input
            className="Input"
            type="text"
            name="name"
            required
            placeholder="Enter Recipe"
            value={newRecipe.name}
            onChange={e => setnewRecipe({ ...newRecipe, name: e.target.value })}
        />

        <button className="BtnAddRecipe" >Add Recipe</button>

{/* SERACH RECIPES */}
        <input 
          className="Input2"
            type="text"
            value={query}
            onChange={handleFilterChange}
            name="name"
            placeholder="Search Recipe"
            autoComplete="off"
          />
    </form>
    


    {editing && (
        <form className="EditFormHolder" onSubmit={saveEdit}>
          <div className="EditForm">
            <h2>Edit Recipe</h2>
            <h2>
              <input
                  className="Input"
                  placeholder="Recipe Name"
                  onChange={e =>
                  setRecipeToEdit({ ...recipeToEdit, name: e.target.value })
                }
                value={recipeToEdit.name}
              />
            </h2>
     
            <button className="BtnEditSave" type="submit">save</button>
            <button className="BtnEditCancel" onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}

    <div className='RecipeHolder'>


    {filteredRecipes.map(recip => (
        // {colors.map(color => (
            <div className="RecipeCard" key={recip.name} >
                <h2>{recip.name}</h2>
                <div className="BtnHolder">
                <button className="BtnDeleteRecipe" onClick={e => {
                    e.stopPropagation();
                    deleteRecipe(recip)}}>
                    Delete Recipe
                </button>

                <button className="BtnEditRecipe" onClick={() => editRecipe(recip)}>Edit Recipe</button>
                </div>

            </div>
        ))}
    </div>

      
    </div>
  );
};

export default RecipeList;
