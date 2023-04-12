import React from 'react'
import "./Menu.css"
import { Link } from 'react-router-dom'
import SignOutButton from '../SignOutButton'
import { RiHomeSmileLine } from "react-icons/ri";
import { MdOutlineFavoriteBorder } from "react-icons/md";
export default function Menu() {
  function openNav() {
    if (document.getElementById("myNav")) {
      document.getElementById("myNav").style.width = "100%";
    }
  }

  function closeNav(event) {
    if (document.getElementById("myNav")) {
      event.preventDefault();
      document.getElementById("myNav").style.width = "0%";
    }
  }
  return (
    <div className="menu">
     <div id="myNav" className="overlay">
    <a
    href="/home"
    className="closebtn"
    aria-label="close button"
        onClick={closeNav}
      >
       &times;
       </a> 
    <div className="overlay-content">
    <Link to="/profile" aria-label="Profile">
      Profile
    </Link>
    <Link to="/home" aria-label="home">
    My ToDo 
    </Link>
    <Link className='navList' to="/asian">
       Recipe Collection
          </Link>
        <Link to="/fav">
         Fav-recipe
          </Link>
    <SignOutButton />
  </div>
  </div>

  <i id='menuIcon' onClick={openNav} icon="fa-solid fa-bars" >Menu</i>
    </div>

  )
}

