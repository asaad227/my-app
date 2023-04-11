import React from 'react'
import "../List/List.css"

export default function Form({addToList, show, setListInput, listInput, setVal, val}) {
  return (
    <div>  <form onSubmit={addToList} className={!show?"todoInput":"todoHide"} >
    <h4 className='label-todo'>ToDo List</h4>
      <input onChange={e => setListInput(e.target.value)} value={listInput} type="text" placeholder='Enter your todo here ...' />
      
      <h4 className='label-reminder'>Add Reminder</h4>
      <input onChange={e => setVal(e.target.value)} value={val} type="datetime-local" placeholder='date and time' />
      
      <button>Add</button>
      
      </form></div>
  )
}
