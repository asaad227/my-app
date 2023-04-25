import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOutButton';


export default function Menu() {

  function openNav() {
    document.getElementById("mySidepanel").style.width = "65vw";
    document.getElementById("mySidepanel").style.height = "100vh";
  }
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
  return (
    <div >
      <div className='sidepanel' id="mySidepanel">

        <Link to='#' className='closebtn' onClick={closeNav}>
          <i className="fa fa-caret">X</i></Link>

        <Link to="/">
          <li><i className="fa fa-home"></i></li>
        </Link>
        <Link to="/todo">
          <li><i className="fa fa-tasks" aria-hidden="true"></i> ToDo</li>
        </Link>
        <Link to="/asian">
          <li><i className="fa fa-cutlery"></i> Recipe</li>
        </Link>
        <Link to="/fav">
          <li><i className="fa fa-heart"></i> Favourite Recipe</li>
        </Link>
        <Link to="/calories">
        <li><i className="fa fa-calculator" aria-hidden="true"></i> Calorie Calculator</li>
        </Link>
        {/* <div className='recipeIcon'>
        <a href="https://asian-recipe.vercel.app/" target="_blank" rel="noreferrer"> Recipe App  <i class="fa fa-cutlery" aria-hidden="true"></i> </a>
        </div> */}
        
          <SignOutButton/>
          

      </div>
      <button className="openbtn" onClick={openNav}>
        <i className='fa fa-bars'></i></button>

    </div>
  )
}
