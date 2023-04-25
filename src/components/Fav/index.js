import React, {useState, useEffect} from "react";
import FavPicHome from "../../assets/Recipe-asian-app.gif";
import "./index.css";
import Menu from "../Menu";




export default function Fav() {
  const [show, setShow] = useState(false);

  const [data, setData] = useState(() => {
    const storedList = localStorage.getItem("myFav");
    return storedList ? JSON.parse(storedList) : [];
  });

  useEffect(() => {
    localStorage.setItem("myFav", JSON.stringify(data))
  }, [data])


  function remove(index) {
    const list = [...data];
    list[index].id = !list[index].id
    const finalList = list.filter(e => !e.id)
    localStorage.removeItem("myFav", JSON.stringify(finalList))
    setData(finalList)

  }

  const display = (id) => {
    setShow((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

 function removeAllFav(e){
  localStorage.removeItem("myFav", JSON.stringify(e))
  setData([])
 }

 function checklist(){
  if(data.length === 0){
    return(<div className="favDiv">
      <h5>Nothing on the <i className="fa fa-heart" aria-hidden="true"></i> list. Add some from the Home!!!</h5>
    <img src={FavPicHome} className="recipe-fav" alt="Recipe-home"/>
    </div>)
  }else{
   return (
    <div>
    {data.map((e, index)=> <section className='flex-box' key={index}>
   
     <h4 className='label'>{e.recipe.label}</h4>
     
     
     <div className="favImg">
    <img src={e.recipe.image} className='recipe-pic' alt={e.recipe.label}/>
    <p className='caloriesApi'>Calories: {e.recipe.calories.toFixed(0)} kcals</p>
    <button key={index} onClick={() => remove(index)} className="reBtn"> <i class="fa fa-trash iconNav" aria-hidden="true"></i></button>
    </div>
  <button className='ingredientBtn' onClick={()=> display(index)}>{show[index]? "Hide Ingredients":"Show Ingredients"}</button>
   <p >{show[index]? e.recipe.ingredients.map((x,i)=>{
return(<div>
  <ul  className="ingredientPara" key={i}><li>{x.text}</li></ul>
  </div>)
   })
:""}</p>
    
   
    </section>)}
    <div>
      <button onClick={()=>removeAllFav(data)} className='remove-Allfav'>Remove All</button>
      </div>
    </div>)
  }
 }







  //data? will take care of, if nothing on fav list it will show empty page
  //isAuthenticated will checked user allow to use this page 
  return (
    <div>
 <Menu/>
<div className="recipe-app">
      <h1 className="fav-title">My <i className="fa fa-heart" aria-hidden="true"></i> List</h1>
      <div className='flex-container'>
      {checklist()}

      </div>
      
    </div>
    </div>
  )
}

