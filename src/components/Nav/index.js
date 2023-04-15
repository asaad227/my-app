import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'
import SignOutButton from '../SignOutButton'
export default function Nav() {


   
return (
    <div  className='menuBar'> 
      
          <Link className='menuLink' to="/">
          <i className="fa fa-home"></i>
        </Link>
          <Link  className='menuLink' to="/todo">
          ToDo
          </Link>
          <Link  className='menuLink' to="/asian">
          Recipe
          </Link>
          <Link  className='menuLink' to="/fav">
          <i class="fa fa-heart" aria-hidden="true"></i>
          </Link>
          <div className='menuLink'>
          <i class="fa fa-sign-out" aria-hidden="true"><SignOutButton/></i>
          </div>
          
          
  </div>
)
}

