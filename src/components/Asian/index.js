import React, { useState, useEffect } from 'react'
import './index.css';
import { MdOutlineFavoriteBorder } from "react-icons/md";

import { useAuth0 } from "@auth0/auth0-react";
import RecipeButtons from '../Buttons';
import Menu from '../Menu';




function Asian() {
  const { isAuthenticated } = useAuth0();
  const [dishInput, setDishInput] = useState('');
  const [cuisineInput, setCuisineInput] = useState('');
  const [show, setShow] = useState(false)

  const [data, setData] = useState(() => {
    const storedList = localStorage.getItem("myRecipe");
    return storedList ? JSON.parse(storedList) : [];
  });

  useEffect(() => {
    localStorage.setItem("myRecipe", JSON.stringify(data))
  }, [data])

  async function getApi() {

    const responce = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${dishInput}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&cuisineType=${cuisineInput}&random=true`);
    const data = await responce.json();
    if (data.status === 404) {
      console.log("error");
    } else {
      // adding id to the api and adding 1+ index number
      const { hits } = data;
      const exist = await hits.map((e, i) => e ? { ...e, id: Number(1) + i } : e);
      //setting local storage with this new api
      localStorage.setItem("myRecipe", JSON.stringify(exist))

      console.log(exist)
      setData(exist)
    }

  }

  function onSubmit(e) {
    e.preventDefault();
    getApi();
  }
  const display = (id) => {
    setShow((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  function fav(index) {
    const list = [...data];
    list[index].id = !list[index].id
    const finalList = list.filter(e => !e.id)
    localStorage.setItem("myFav", JSON.stringify(finalList))
    console.log(finalList);
  }

  function checklist(){
    if(data.length === 0){
      return(<div>
        <p>Please fetch the data</p>
      </div>)
    }else{
     return (data.map((e, index)=> <section className='flex-box' key={index}>
     
       <h4 className='label'>{e.recipe.label}</h4>
       <button key={index} onClick={() => fav(index)} className="reBtn"> <i class="fa fa-heart iconNav" aria-hidden="true"></i></button>
       
       <div>
      <img src={e.recipe.image} className='recipe-pic' alt={e.recipe.label}/>
      </div>
    <button className='ingredientBtn' onClick={()=> display(index)}>{show[index]? "Hide Ingredients":"Show Ingredients"}</button>
     <p >{show[index]? e.recipe.ingredients.map((x,i)=>{
  return(<div>
    <ul  className="ingredientPara" key={i}><li>{x.text}</li></ul>
    </div>)
     })
  :""}</p>
      
     
      </section>))
    }
   }

  return (
    isAuthenticated &&
    <div className="recipe-app">
      <Menu />
      <form onSubmit={onSubmit} className='form'>
        <div>
          <input className='textIn' onChange={(e) => { setDishInput(e.target.value) }} type='text' value={dishInput} placeholder='Enter your recipe search here....' />
        </div>
        <div>
          <RecipeButtons onClick={(e) => setCuisineInput(e.target.id)} />

        </div>
      </form>

      <div className='flex-container'>
      {checklist()}
      </div>
    </div>
  );
}

export default Asian;
