import React from 'react';
// import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import axios from 'axios'
import './Recipe.css';

import Navbar from "./components/Navbar";
import RecipePage from "./components/RecipePage";


function App() {

  // const data = ["tomato", "potato"];


  return (
    <main >
      
      <Navbar/>
      <RecipePage/>
      
  
    
    </main>
  );
}

export default App;
