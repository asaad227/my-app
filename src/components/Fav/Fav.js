
import React, { useEffect, useState} from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
import Menu from '../Menu/index';
import { useAuth0 } from "@auth0/auth0-react";

export default function Fav() {
  const { isAuthenticated } = useAuth0();
  const [toggle, setToggle] = useState(false)
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

    const display = (id) => {
      setToggle((prevState) => ({
        ...prevState,
        [id]: !prevState[id],
      }));
    };
  






   
//data? will take care of, if nothing on fav list it will show empty page
//isAuthenticated will checked user allow to use this page 
  return (
  isAuthenticated &&<div className='App'>
  <Menu/>
  <div className='flex-container'>
  {data.map((e, index)=> <section className='flex-box' key={index}><h4 className='label'>{e.recipe.label}</h4>
<div>
<img src={e.recipe.image} width={200} height={200} alt={e.recipe.label}/>
<h6 style={{color:'gold'}}>Meal type: {e.recipe.mealType}</h6>
</div>
<button onClick={()=>remove(index)} className="reBtn"> <RiDeleteBin5Line/></button>


<p  className='ingredientPara'>{toggle[index]? e.recipe.ingredientLines: ''}</p>
  <button onClick={()=>display(index)} className='cuisineInput'>{!toggle[index]? 'Get Ingredient': 'Hide Ingredient'}</button>
  

 
<h6 style={{color:'gold'}}>Total time: {e.recipe.totalTime} min</h6>
</section>)}

</div>
 
  </div>
  )
  }
