import React, {useState} from 'react'
import './index.css';
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Menu from '../Menu';



function Asian() {
  const [dishInput, setDishInput] = useState('');
  const [cuisineInput, setCuisineInput] = useState('');
  const [toggle, setToggle] = useState(false)
  const [data, setData] = useState(() => {
    const storedList = localStorage.getItem("recipe");
    return storedList ? JSON.parse(storedList) : [];
  });

 
 
  async function testFetch(){
   
    const responce = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${dishInput}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&cuisineType=${cuisineInput}&random=true`);
    const data = await responce.json();
    if(data.status === 404){
      console.log("error");
    }else {
      // adding id to the api and adding 1+ index number
      const {hits} = data;
      const exist = await hits.map((e, i)=> e? {...e, id:Number(1)+i}: e);
      //setting local storage with this new api
      localStorage.setItem("myRecipe", JSON.stringify(exist))

      console.log(exist)
      setData(exist)
    }
      }
    //  testFetch()
  function onSubmit(e){
    e.preventDefault();
    testFetch()
    
  } 
  function display(e){
    e.preventDefault();
     setToggle(!toggle)
      
    }

function fav(){
const list = [...data];
list.id = !list.id

const finalList = list.filter(e=> !e.id)

console.log(finalList);
}
 console.log(data);
  return (
    <div className="recipe-app">
    <Menu/>
     <form onSubmit ={onSubmit} className='form'>
     {/* <button id='home' className='cuisineInput' type='button' onClick={()=> window.location.reload()} value='Home'>Home</button> */}
    <input className='textIn'  onChange={(e)=> {setDishInput(e.target.value)}} type='text' value={dishInput} placeholder='Type main ingredients then select your CUISINE'/>
   
   <button id='Indian' className='cuisineInput' type='button' onClick={(e)=> {setCuisineInput(e.target.id)}} >Indian</button>
   <button id='Chinese' className='cuisineInput' type='button' onClick={(e)=> {setCuisineInput(e.target.id)}} >Chinese </button>
   <button id='Korean' className='cuisineInput' type='button' onClick={(e)=> {setCuisineInput(e.target.id)}}  >Korean</button>
   <button id='Asian' className='cuisineInput' type='button' onClick={(e)=> {setCuisineInput(e.target.id)}} >Asian</button>
   <button className='cuisineInput'>Get Recipe</button>
   


       {/* <input onChange={(e)=> {setcuisineInput(e.target.value)}} type='text' placeholder='Meat or Chicken'/> */}
       {/* <button className='submit'>Submit</button> */}
     </form>
     
 <div className='flex-container'>
{data.map((e, index)=> <section className='flex-box' key={index}><h4 className='label'>{e.recipe.label}</h4>
<div>
<img src={e.recipe.image} width={200} height={200} alt={e.recipe.label}/>
<h6 style={{color:'gold'}}>Meal type: {e.recipe.mealType}</h6>
</div>
<button onClick={fav} className="reBtn"><MdOutlineFavoriteBorder className='iconNav' /></button>

<form onSubmit={display}>
  <p  className='ingredientPara'>{toggle? e.recipe.ingredientLines: ''}</p>
  <button className='cuisineInput'>{!toggle? 'Get Ingredient': 'Hide Ingredient'}</button>
  </form>
 
<h6 style={{color:'gold'}}>Total time: {e.recipe.totalTime} min</h6>
</section>)}
</div>
    </div>
  );
}

export default Asian;
