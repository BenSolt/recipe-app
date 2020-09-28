import React, { useState, useEffect } from "react";
import axios from "axios";

// import Bubbles from "./Bubbles";
import RecipeList from "./RecipeList";

// import axiosWithAuth from '../utils/AxiosWithAuth';

const BubblePage = () => {
  const [recipeList, setRecipeList] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
  // axiosWithAuth()
    .get('https://recipe-organizer-app.herokuapp.com/char')
   
    .then(res => {
        setRecipeList(res.data)
      // const info = res.data.filter(p =>
      //    p.toLowerCase().includes(query.toLowerCase()),
      //  );
    })
    .catch(err => {
      console.log(err)
    });
}, [query]);
// },[]);

// const handleFilterChange = event => {
//     setQuery(event.target.value);
//   };

// const filteredRecipes = recipeList.filter(r => {
//     return r.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
//   });



  return (
    <div>

      <RecipeList 
      recipes={recipeList} 
      updateRecipes={setRecipeList}
      />


    </div>
  );
};

export default BubblePage;