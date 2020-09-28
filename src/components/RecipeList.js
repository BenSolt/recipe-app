import React, { useState, useEffect } from "react";
import axios from "axios";
// import axiosWithAuth from '../utils/AxiosWithAuth';


const initialColor = {
  name: ""
};

const ColorList = ({ colors, updateColors }) => {
  console.log(colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const [newColor, setNewColor]=useState({name: ""})

  const [query, setQuery] = useState("");


  const filteredRecipes = colors.filter(r => {
        return r.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

  const handleFilterChange = event => {
        setQuery(event.target.value);
    };  





    
// ////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();

    // axiosWithAuth()
    axios
    // .put(`/api/colors/${colorToEdit.id}`, colorToEdit)
    .put(`https://recipe-organizer-app.herokuapp.com/char/${colorToEdit.id}`, colorToEdit)
     .then(res => {  
      updateColors(
        console.log('edit success?'),
        colors.map(color => {
          if (color.id === res.data.id) {
            return res.data
          }else {
            return color;
          }
        })
        
     )})
     .catch(err => console.log(err,'edit failed'));
    };


  const deleteColor = color => {
    // axiosWithAuth()
    axios
      .delete(`https://recipe-organizer-app.herokuapp.com/char/${color.id}`)
      .then(res => {
      console.log(color, 'delete color')
      updateColors(colors.filter(color => color.id !== res.data))
    })
      .catch(err => console.log(err, 'delete fail'));

  };

  const addColor = e => {
    e.preventDefault();
    // axiosWithAuth()
    axios
      .post('https://recipe-organizer-app.herokuapp.com/char', newColor)
      .then(res => {
        updateColors(res.data);
        setNewColor({
          name: ""
        });
      })
      .catch(err => console.log(err));
  };



  return (
    <div>

    <form onSubmit={addColor} className='Formholder'>
        <input
            className="Input"
            type="text"
            name="name"
            required
            placeholder="Enter Recipe"
            value={newColor.name}
            onChange={e => setNewColor({ ...newColor, name: e.target.value })}
        />

        <button className="BtnAddRecipe" >enter</button>

{/* SERACH RECIPES */}
        <input 
          className="Input"
            type="text"
            value={query}
            onChange={handleFilterChange}
            name="name"
            placeholder="Search Recipe"
            autoComplete="off"
          />
    </form>
    


    {editing && (
        <form onSubmit={saveEdit}>
          <legend>Edit Recipe</legend>
          <label>
            Recipe name:
            <input
                className="Input"
                onChange={e =>
                setColorToEdit({ ...colorToEdit, name: e.target.value })
              }
              value={colorToEdit.name}
            />
          </label>
     
          <div className="button-row">
            <button className="BtnEditRecipe" type="submit">save</button>
            <button className="BtnEditRecipe" onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}

    <div className='RecipeHolder'>


    {filteredRecipes.map(color => (
        // {colors.map(color => (
            <div className="RecipeCard" key={color.name} >
                <h2>{color.name}</h2>
                <button className="BtnDeleteRecipe" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)}}>
                    Delete Recipe
                </button>

                <button className="BtnEditRecipe" onClick={() => editColor(color)}>Edit Recipe</button>
                
            </div>
        ))}
    </div>

      
    </div>
  );
};

export default ColorList;
