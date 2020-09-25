import React, { useState, useEffect } from "react";
import axios from "axios";

// import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

// import axiosWithAuth from '../utils/AxiosWithAuth';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [query, setQuery] = useState("");

  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property


//   useEffect(() => 
//     axios
//     .get (`/api/colors`)
//     .then(res => {
//       setColorList(res.data)
       
//       })
//     .catch(err => {
//         console.log(err)
//     });
//   },[])


  useEffect(() => {
    axios
  // axiosWithAuth()
    .get('https://recipe-organizer-app.herokuapp.com/char')
   
    .then(res => {
        setColorList(res.data)
      // const info = res.data.filter(p =>
      //    p.toLowerCase().includes(query.toLowerCase()),
      //  );
    })
    .catch(err => {
      console.log(err)
    });
// }, [query]);

});

const handleFilterChange = event => {
    setQuery(event.target.value);
  };

// const filteredRecipes = colorList.filter(r => {
//     return r.name.toLowerCase().indexOf(colorList.toLowerCase()) !== -1;
//   });  

  return (
    <div className="RecipeHolder">

      <ColorList 
      colors={colorList} 
      updateColors={setColorList}
      handleFilterChange1={handleFilterChange}
    //   filteredRecipes1={filteredRecipes}
      />
      {/* <Bubbles colors={colorList} /> */}

    </div>
  );
};

export default BubblePage;