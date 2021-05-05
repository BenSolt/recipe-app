import React, { useState, useEffect } from "react";
import axios from "axios";

import RecipeList from "./RecipeList";

// import RecipeList_Edit from "./RecipeList_Edit";

// import axiosWithAuth from '../utils/AxiosWithAuth';

const RecipePage = () => {
  const [recipeList, setRecipeList] = useState([]);
  // const [query, setQuery] = useState("");

  useEffect(() => {
    axios
  // axiosWithAuth()
    .get('https://recipe-organizer-app.herokuapp.com/char')
    .then(res => {
        setRecipeList(res.data)
    })
    .catch(err => {
      console.log(err)
    });
}, []);

// Having recipeList - calls continuesly...
// }, [query, recipeList]);

  return (
    <div>

      <RecipeList 
      recipes={recipeList}
      updateRecipes={setRecipeList}
      />

    </div>
  );
};

export default RecipePage;