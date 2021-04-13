import React, { useState } from "react";
import axios from "axios";
import { Accordion, Card, Button } from 'react-bootstrap'
// import axiosWithAuth from '../utils/AxiosWithAuth';

import AddRecipeForm from './AddRecipeForm';
import SearchRecipeForm from './SearchRecipeForm';


const initialRecipe = {
  name: ""
};

const RecipeList = (props) => {

  console.log(props.recipes);
  const [editing, setEditing] = useState(false);
  const [recipeToEdit, setRecipeToEdit] = useState(initialRecipe);
  const [newRecipe, setnewRecipe] = useState({ name: "" })

  const [filter, setFilter] = useState("");

 {/* ////////////////////////////////////// */ }
  {/* ////////////////////////////////////// */ }
  const filteredRecipes = props.recipes.filter(r => {
    return r.name.toLowerCase().includes(filter.toLowerCase());
  });
  {/* ////////////////////////////////////// */ }
  {/* ////////////////////////////////////// */ }

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const editRecipe = recip => {
    setEditing(true);
    setRecipeToEdit(recip);
    scrollEdit()
  };

  const saveEdit = e => {
    e.preventDefault();


////////EDIT RECIPE////////////////////////////////////////
///////////////////////////////////////////////////////////
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
      )})
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
      .post('https://recipe-organizer-app.herokuapp.com/char', newRecipe)
      .then(res => {
        props.updateRecipes(res.data);
      })
      .catch(err => console.log(err));
  };

  const scrollEdit = e => {
    var elmnt = document.getElementById("contentArt");
    elmnt.scrollIntoView();
  };

  return (
    <div>

      <div className='Formholder'>
        <AddRecipeForm addRecipe1={addRecipe} valu={newRecipe.name} onChang={e => setnewRecipe({ ...newRecipe, name: e.target.value })} />
        <SearchRecipeForm filter={filter} onFilterChange={handleFilterChange} />
      </div>


{/* EDIT RECIPE BOX //////////////////////////////////////////*/}
      {editing && (
        <form className="EditFormHolder" id="contentArt" onSubmit={saveEdit}>
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
{/* END EDIT RECIPE BOX /////////////////////////////////*/}

      <div className='RecipeHolder'>

{/* //////////////RECIPE CARD//////////////////////////// */}
{/* //////////////////////////////////////////////////// */}
        {filteredRecipes.map(recip => (
          <div className="RecipeCard" key={recip.id} >
            <h2>{recip.name}</h2>
            <h4>{recip.name}</h4>
            

            <button className="BtnEditRecipe" onClick={() =>
              editRecipe(recip)}>
              Edit Recipe
            </button>

        

            <button className="BtnDeleteRecipe" onClick={e => {
              e.stopPropagation();
              deleteRecipe(recip)}}>
              Delete
            </button>

          </div>
        ))}
{/* ////////////////////////////////////// */}
{/* ////////////////////////////////////// */}



        {/* {props.recipes.map(recip => (
          <div className="RecipeCard" key={recip.id} >
            <h2>{recip.name}</h2>
            <div className="BtnHolder">
              <button className="BtnDeleteRecipe" onClick={e => {
                e.stopPropagation();
                deleteRecipe(recip)
              }}>
                Delete Recipe
                </button>

              <button className="BtnEditRecipe" onClick={() => editRecipe(recip)}>Edit Recipe</button>

            </div>

            <Accordion >
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button}  eventKey={recip.id} className="BtnEditRecipe" >
                    Edit Recipe
            </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={recip.id}>
                  <Card.Body>

                    <input
                    className="Input"
                    placeholder="Recipe Name"
                    onChange={e =>
                      setRecipeToEdit({ ...recipeToEdit, name: e.target.value })
                    }
                    // value={recipeToEdit.name}
                    value={recip.name}
                    />

                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>

          </div>
        ))} */}

      </div>


    </div>
  );
};

export default RecipeList;
