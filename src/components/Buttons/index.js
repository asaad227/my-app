import * as React from 'react';


export default function RecipeButtons({onClick}) {
  return (
    <div className='btn'>
    <button id='Indian' className='cuisineInput'  onClick={onClick} >Indian</button>
   <button id='Chinese' className='cuisineInput'  onClick={onClick} >Chinese </button>
   <button id='Korean' className='cuisineInput'  onClick={onClick}  >Korean</button>
   <button id='Asian' className='cuisineInput'  onClick={onClick} >Asian</button>
   <button className='cuisineInput' >Get Recipe</button>
    </div>
  );
}