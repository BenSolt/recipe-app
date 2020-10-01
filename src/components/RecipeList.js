import React, { useState, useEffect } from "react";
import axios from "axios";
// import axiosWithAuth from '../utils/AxiosWithAuth';

import AddRecipeForm from './AddRecipeForm';
import SearchRecipe from './SearchRecipe';

const initialRecipe = {
  name: ""
};

// const RecipeList = ({ recipes, updateRecipes }) => {
const RecipeList = (props) => {  

  console.log(props.recipes);
  const [editing, setEditing] = useState(false); 
  const [recipeToEdit, setRecipeToEdit] = useState(initialRecipe);
  const [newRecipe, setnewRecipe]=useState({name: ""})

  const [filter, setFilter] = useState("");

  // NOT USING CURRENTLY - throws error with adding when using both.
  
  // const filteredRecipes = props.recipes.filter(r => {
  //       return r.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
  //   });

    

  const handleFilterChange = e => {
        setFilter(e.target.value);
    };  
  

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
      props.updateRecipes(
        console.log('edit success?'),
        props.recipes.map(recip => {
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
      props.updateRecipes(props.recipes.filter(recip => recip.id !== res.data))
      window.location.reload();
    })
      .catch(err => console.log(err, 'delete fail'));

  };

  const addRecipe = e => {
    e.preventDefault();
    // axiosWithAuth()
    console.log('add recipe')
    axios
      .post('https://recipe-organizer-app.herokuapp.com/char', newRecipe)
      .then(res => {
        props.updateRecipes(res.data);
        window.location.reload(false);
        // setnewRecipe({
        //   name: ""
        // });
      })
      .catch(err => console.log(err));
  };


  return (
    <div>

    {/* <form onSubmit={addRecipe} className='Formholder'>
        <input
            className="Input"
            type="text"
            name="name"
            required
            placeholder="Enter Recipe"
            value={newRecipe.name}
            onChange={e => setnewRecipe({ ...newRecipe, name: e.target.value })}
        />

        <button className="BtnAddRecipe" >Add Recipe</button> */}

{/* SERACH RECIPES */}
        {/* <input 
          className="Input2"
            type="text"
            value={filter}
            onChange={handleFilterChange}
            name="name"
            placeholder="Search Recipe"
            autoComplete="off"
          /> */}
    {/* </form> */}
    <AddRecipeForm addRecipe1={addRecipe}  v={newRecipe.name} onC={e => setnewRecipe({ ...newRecipe, name: e.target.value })}/>
    <SearchRecipe  onFilterChange={handleFilterChange}/>


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


        {/* {filteredRecipes.map(recip => (          
          <div className="RecipeCard" key={recip.id} >
                <h2>{recip.name}</h2>
          </div>
          ))} */}

        {/* {filteredRecipes.map(recip => (     */}
        {props.recipes.map(recip => (
            <div className="RecipeCard" key={recip.id} >
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
