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
          <i class="fa fa-tasks" aria-hidden="true"> My To-Do</i>
          </Link>
          {/* <Link  className='menuLink' to="/asian">
          Recipe
          </Link>
          <Link  className='menuLink' to="/fav">
          <i class="fa fa-heart" aria-hidden="true"></i>
          </Link> */}
          <div className='menuLink'>
        <a href="https://asian-recipe.vercel.app/" target="_blank" rel="noreferrer"> <i class="fa fa-cutlery" aria-hidden="true"> My Recipe App</i> </a>
        </div>
          
          <div className='menuLink'>
          <SignOutButton/>
          </div>
          
          
  </div>
)
}

