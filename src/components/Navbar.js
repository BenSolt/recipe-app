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

       <button onClick={scrollArt} className='navlink'>ARTWORK</button>

      <div id="contentArt">
        content
          </div>


    </div>
  )

}

export default Navbar;