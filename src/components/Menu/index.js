import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOutButton';


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
      <div className='sidepanel' id="mySidepanel">

        <Link to='#' className='closebtn' onClick={closeNav}>
          <i className="fa fa-caret">X</i></Link>

        <Link to="/">
          <li><i className="fa fa-home"></i></li>
        </Link>
        <Link to="/todo">
          <li><i className="fa"></i>To-Do</li>
        </Link>
        <Link to="/asian">
          <li><i className="fa"></i>Recipe</li>
        </Link>
        <Link to="/fav">
          <li><i className="fa fa-heart"></i></li>
        </Link>
        <li>
          <SignOutButton />
        </li>

      </div>
      <button className="openbtn" onClick={openNav}>
        <i className='fa'>☰</i></button>

    </div>
  )
}
