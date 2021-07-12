import React, { useState, useEffect } from "react";
import axios from "axios";

import RecipeList from "./RecipeList";

const RecipePage = () => {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    axios
  // axiosWithAuth()
    .get('https://recipe-organizer-app.herokuapp.com/char')
    // .get('https//:localhost:3000/char')
    .then(res => {
      console.log(res.data)
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