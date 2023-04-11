import React from "react";
import Menu from "../Menu";
import "./Header.css"

const Header = ({bool}) =>{
    if(bool === "home"){
        console.log(bool)
        return(
        <div className="Header">
            <Menu />
            <h1 className="Logo">My To-Do</h1>
           
        </div>
        )
    }
   
    return(
        
    <div className="Header">
        <Menu />
        <h1 className="Logo">My To Do</h1>
        
    </div>
    )
    
}
export default Header