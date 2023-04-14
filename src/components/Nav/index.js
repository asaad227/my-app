import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'
import SignOutButton from '../SignOutButton'
export default function Nav() {


   
return (
    <div  className='menuBar'> 
      
          <Link to="/">
          <li>Profile</li>
          </Link>
          <Link to="/home">
          <li>ToDo</li>
          </Link>
          <Link to="/asian">
          <li>Recipe</li>
          </Link>
          <Link to="/fav">
          <li>Fav</li>
          </Link>
          <li>
          <SignOutButton/>
          </li>
          
  </div>
)
}

