import React, {useEffect, useState } from "react";
import axios from 'axios';

import AEdit from './AEdit';
import ASearch from './ASearch';
import AList from './AList';

export default function App() {
  const dataInfo = ["Chocolate Chip Cookies", "Pizza", "spagetti"];

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

 
  return (
    <div className="App">
      <SearchAndList 
      dataInfo2={dataInfo}
      recipes={recipeList} 
      updateRecipes={setRecipeList} 
      
      />
    </div>
  );
}

function SearchAndList(props) {
  const dataSearch = props.dataInfo2;
  // const dataSearch = props.updateRecipes;
  
 
  const [filter, setFilter] = useState("");
  const [filteredData, setFilteredData] = useState(dataSearch);


  function handleFilterChange(f) {
    const fd = dataSearch.filter((datum) => {
      return datum.toLowerCase().includes(f.toLowerCase());
    });
    setFilteredData(fd);
    setFilter(f);
  }

  function handleEditSubmit(edit) {
    dataSearch.push(edit);
    setFilteredData(dataSearch);
  }

  return (
    <div>
      <AEdit onEditSubmit={handleEditSubmit} />

      <ASearch filter={filter} onFilterChange={handleFilterChange} />

      <AList filteredData1={filteredData} />

    </div>
  );
}