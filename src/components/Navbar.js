import React from "react";
// import { NavLink } from "react-router-dom";



function Navbar() {

  function scrollArt() {
    var elmnt = document.getElementById("contentArt");
    elmnt.scrollIntoView();
  }

  return (

    <div className='Navbar'>
      <h1>RECIPE ORGANZIER</h1>

    </div>
  )

}

export default Navbar;