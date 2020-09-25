import React, { useState } from "react";
import axios from "axios";
// import axiosWithAuth from '../utils/AxiosWithAuth';


const initialColor = {
  name: ""
};

const ColorList = ({ colors, updateColors }) => {
  console.log(colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const [newColor, setNewColor]=useState({name: "",
  
  })

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
    //   .delete(`/api/colors/${color.id}`)
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
    //   .post("/colors", newColor)
      .post('https://recipe-organizer-app.herokuapp.com/char', newColor)
      .then(res => {
        updateColors(res.data);
        setNewColor({
          name: ""
        });
      })
      .catch(err => console.log(err));
  };

//  const filteredRecipes = colors.filter(r => {
//     return r.name.toLowerCase().indexOf(colors.query.toLowerCase()) !== -1;
//   });


  return (
    <div className="colors-wrap">

    <form onSubmit={addColor}>
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


        <input 
          className="Input"
            type="text"
            onChange={colors.handleFilterChange1}
            value={colors.query}
            name="name"
            placeholder="Search Recipes"
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

        {/* {colors.filteredRecipes1.map(color => ( */}
        {colors.map(color => (
            
            <div className="RecipeCard" key={color.name} >
                <h2>{color.name}</h2>
                <button className="BtnDeleteRecipe" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)}}>
                    Delete Recipe
                </button>

                <button className="BtnEditRecipe" onClick={() => editColor(color)}>Edit Recipe</button>
                    
                    
                {/* <div
                className="color-box"
                style={{ backgroundColor: color.code.hex }}
                /> */}
            </div>
        ))}
    </div>

      
    </div>
  );
};

export default ColorList;
