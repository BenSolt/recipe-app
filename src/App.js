import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import './Recipe.css';

import Navbar from "./components/Navbar";
import RecipePage from "./components/RecipePage";



function App() {


  return (
    <main >

      <Navbar/>
      <RecipePage/>


  
    
    </main>
  );
}

export default App;
