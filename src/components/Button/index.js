import React from 'react'
import "../List/List.css";

export default function Button({setShow, show, removeAll}) {
  return (<div className='displayDiv'>
  
    
    <button onClick={()=> setShow(!show)} className={!show?'btn2':'btn1'}> {!show? "Hide Input":"Click here to Add to do"}</button>

<button className='delBtn' type='submit' onClick={removeAll}>Clear All To do</button>

  </div>)
}
