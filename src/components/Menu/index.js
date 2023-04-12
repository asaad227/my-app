import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'
import SignOutButton from '../SignOutButton'
export default function Menu() {

  function openNav() {
      document.getElementById("mySidepanel").style.width = "200px";
      document.getElementById("mySidepanel").style.height = "700px";
  }
    function closeNav() {
      document.getElementById("mySidepanel").style.width = "0";
    }
return (
    <div > 
  <div  className='sidepanel' id="mySidepanel">

<Link to='#' className='closebtn' onClick={closeNav}>
<i className="fa fa-caret">X</i></Link>
     
      <Link to="/home">
          <li><i className="fa"></i>My Todo</li>
          </Link>
          <Link to="/">
          <li><i className="fa"></i>Profile</li>
          </Link>
          <Link to="/asian">
          <li><i className="fa"></i>Recipe</li>
          </Link>
          <Link to="/fav">
          <li><i className="fa"></i>Fav-Recipe</li>
          </Link>
 <SignOutButton/>
  </div>
  <button className="openbtn" onClick={openNav}>
  <i className='fa'>☰</i></button>  

  </div>
)
}

