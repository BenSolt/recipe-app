import React, { useEffect, useState } from "react";
import axios from 'axios';

import AEdit from './AEdit';
import ASearch from './ASearch';
import AListFilter from './AListFilter';

export default function App() {
  const dataInfo = ["Chocolate Chip Cookies", "Pizza", "spagetti", 'a', 'b'];


  const [recipeList, setRecipeList] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get('https://recipe-organizer-app.herokuapp.com/char')

      .then(res => {
        setRecipeList(res.data)
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


  const [filter, setFilter] = useState("");
  const [filteredData, setFilteredData] = useState(dataSearch);

  function handleFilterChange(f) {
    const fd = dataSearch.filter((data1) => {
      return data1.toLowerCase().includes(f.toLowerCase());
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

      <AListFilter filteredData1={filteredData} />

    </div>
  );
}