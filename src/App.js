import React from 'react';
// import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './Recipe.css';
import './Accordion.css';

import Navbar from "./components/Navbar";
import RecipePage from "./components/RecipePage";

import { Accordion } from 'react-bootstrap';
import NotePage from './components/pagetest3/NotePage';
// import BubblePage from './components/BubblePage';

function App() {

  // const data = ["tomato", "potato"];


  return (
    <main >
      
      <Navbar/>
      <RecipePage/>
  
      {/* <NotePage/> */}
    
    </main>
  );
}

export default App;
