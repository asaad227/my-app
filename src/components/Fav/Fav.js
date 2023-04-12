
import React, { useState, useEffect } from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
import Menu from '../Menu';

export default function Fav() {
  const [toggle, setToggle] = useState({})
  const [data, setData] = useState(() => {
    const storedList = localStorage.getItem("myFav");
    return storedList ? JSON.parse(storedList) : [];
  });

 useEffect(()=>{
     localStorage.setItem("myFav", JSON.stringify(data))
 },[data])
  

  function remove(index){
    const list = [...data];
    list[index].id = !list[index].id
    const finalList = list.filter(e=> !e.id)
    localStorage.removeItem("myFav", JSON.stringify(finalList))
   setData(finalList)

    }

const display=function(e){
  e.preventDefault()
}






   


 console.log(data)
//data? will take care of, if nothing on fav list it will show empty page
  return (<div className='App'>
  <Menu/>
  <div className='flex-container'>
  {data.map((e, index)=> <section className='flex-box' key={index}><h4 className='label'>{e.recipe.label}</h4>
<div>
<img src={e.recipe.image} width={200} height={200} alt={e.recipe.label}/>
<h6 style={{color:'gold'}}>Meal type: {e.recipe.mealType}</h6>
</div>
<button key={index} onClick={()=>remove(index)} className="reBtn"> <RiDeleteBin5Line/></button>

<form onSubmit={()=>display(index)}>
  <p key={index}  className='ingredientPara'>{toggle? e.recipe.ingredientLines: ''}</p>
  <button key={index} className='cuisineInput'>{!toggle? 'Get Ingredient': 'Hide Ingredient'}</button>
  </form>
 
<h6 style={{color:'gold'}}>Total time: {e.recipe.totalTime} min</h6>
</section>)}
  </div>
  </div>
  )
  }
