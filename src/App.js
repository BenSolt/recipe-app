import React from 'react';
// import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './Recipe.css';

import Navbar from "./components/Navbar";
import RecipePage from "./components/RecipePage";

import ASearchList from "./components/ASearchList";

function App() {

  // const data = ["tomato", "potato"];


  return (
    <main >
      
      <Navbar/>
      <RecipePage/>

      {/* <ASearchList/> */}
      
  
    
    </main>
  );
}

export default App;
