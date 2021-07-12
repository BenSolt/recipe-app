import React, { useState } from "react";
import axios from "axios";
import { Accordion, Card, Button } from 'react-bootstrap'
// import axiosWithAuth from '../utils/AxiosWithAuth';

import AddRecipeForm from './AddRecipeForm';
import SearchRecipeForm from './SearchRecipeForm';

const initialRecipe = {
  name: "",
  ingredients: ""
};

const RecipeList = (props) => {

 
  const [editing, setEditing] = useState(false);
  const [recipeToEdit, setRecipeToEdit] = useState(initialRecipe);
  const [newRecipe, setnewRecipe] = useState({ name: "", ingredients: "" })

  const [filters, setFilters] = useState("");


  
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// THIS IS Throwing an error - when trying to add recipe. "cannot read property 'toLowerCase' of undefined"

  // const filteredRecipes = props.recipes.filter(r => {
  //   return r.name.toLowerCase().includes(filters.toLowerCase());
  // });

///////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

  const handleFilterChange = e => {
    setFilters(e.target.value);
  };

  const editRecipe = recip => {
    setEditing(true);
    setRecipeToEdit(recip);
    scrollEdit()
  };



  ////////EDIT RECIPE////////////////////////////////////////
  ///////////////////////////////////////////////////////////
  const saveEdit = e => {
    e.preventDefault();
    // axiosWithAuth()
    axios
      .put(`https://recipe-organizer-app.herokuapp.com/char/${recipeToEdit.id}`, recipeToEdit)
      .then(res => {
        console.log('edit success?')
        props.updateRecipes(x => x = props.recipes.map(recip => {
          if (recip.id === res.data.id) {
            return res.data
          } else {
            return recip;
          }
        })
        )
        window.location.reload();
      })
      .catch(err => console.log(err, 'edit failed'));
  };


  ////////DELETE RECIPE////////////////////////////////////////
  ///////////////////////////////////////////////////////////
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


  ////////ADD RECIPE//////////////////////////////////////////
  ///////////////////////////////////////////////////////////
  const addRecipe = e => {
    e.preventDefault();
    // axiosWithAuth()
    console.log('add recipe')
    axios
      .post('https://recipe-organizer-app.herokuapp.com/char/', newRecipe)
      .then(res => {
        console.log(res.data, 'added recipe')
        props.updateRecipes(props.recipes);
        setnewRecipe({ name: "", ingredients: "" })
        // works..but refreshes page.. there is a way to do it without reload page..
        window.location.reload();
    
      })
      .catch(err => console.log(err, 'add fail'));      
  };

  // move page view to Edit recipe box location
  const scrollEdit = e => {
    var elmnt = document.getElementById("movetosearchbar");
    elmnt.scrollIntoView();
  };



  return (
    <div>

      <div className='Formholder'>
        <AddRecipeForm
          addRecipe1={addRecipe}
          name1={newRecipe.name}
          ingredient1={newRecipe.ingredients}
          onChange1={e => setnewRecipe({ ...newRecipe, [e.target.name]: e.target.value })} />
        <SearchRecipeForm filter1={filters} onFilterChange={handleFilterChange} />
      </div>

      <div id="movetosearchbar"></div>
    
      

      {/* EDIT RECIPE BOX //////////////////////////////////////////*/}
      {editing && (
        <form className="EditFormHolder" id="movetosearchbar" onSubmit={saveEdit}>
          <div className="EditForm">
            <h2>Edit Recipe</h2>
            <h2>
              <input
                className="Input"
                placeholder="Name"
                onChange={e =>
                  setRecipeToEdit({ ...recipeToEdit, name: e.target.value })
                }
                value={recipeToEdit.name}
              />
               <input
                className="Input"
                placeholder="Ingredients"
                onChange={e =>
                  setRecipeToEdit({ ...recipeToEdit, ingredients: e.target.value })
                }
                value={recipeToEdit.ingredients}
              />
            </h2>

            <button className="BtnEditSave" type="submit">save</button>
            <button className="BtnEditCancel" onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      {/* END EDIT RECIPE BOX /////////////////////////////////*/}

      <div className='RecipeHolder'>

        {/* //////////////RECIPE CARD//////////////////////////// */}
        {/* //////////////////////////////////////////////////// */}

        
        {/* {filteredRecipes.map((recip,idx) => ( */}
        {props.recipes.map((recip, idx )=> (
          <div className="RecipeCard" key={idx} >
            <h2>{recip.name}</h2>
            {/* <h4>{recip.ingredients}</h4> */}

            <Accordion >
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button}  eventKey={recip.id} className="BtnInfo" >
                    Info
            </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={recip.id}>
                  <Card.Body>
                    <h4>{recip.ingredients}</h4>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>


            <button className="BtnEditRecipe" onClick={() =>
              editRecipe(recip)}>
              Edit Recipe
            </button>



            <button className="BtnDeleteRecipe" onClick={e => {
              e.stopPropagation();
              deleteRecipe(recip)
            }}>
              Delete
            </button>

          </div>
        ))}

      </div>


    </div>
  );
};

export default RecipeList;
