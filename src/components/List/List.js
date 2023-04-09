import React, { useEffect, useState} from 'react';
import ListItem from '../ListItem/ListItem';
import Placeholder from '../Placeholder/Placeholder';
import './List.css'


// import Footer from '../Footer/indx';

export default function List() {
    const [listInput, setListInput] = useState("");
    const [val, setVal] = useState("");
    const [txt, setTxt] = useState([]);
    const [show, setShow] = useState();
    const [list, setList] = useState([])
 
async function getApi(){
    let response = await fetch(`/.netlify/functions/get_todoList`, {
        method: "GET",
      });
      let data = await response.json();
     setList(data)
}
function addToList() {
    if(list.length > 5){
    alert("Maximum entry entered. Please delete one then add one!!")
    }else{
     setTxt({text:listInput[0].toUpperCase()+listInput.slice(1), 
     time:val, 
     checked:false})
     fetchPostTodo()
     setListInput("")
    }  
 }
async function fetchPostTodo() {
   let response = await fetch(`/.netlify/functions/post_todoList`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({text:listInput[0].toUpperCase()+listInput.slice(1), 
        time:val, 
        checked:false}),
    });
    await response.json();
    
    await getApi()
 
  }

    async function removeFromList(index) {
     const delTodo ={
        text: list[index].text,
        time:list[index].time,
        checked:list[index].checked
     }
     console.log(delTodo);
            let response = await fetch(`/.netlify/functions/delete_todoList`, {
                method: "DELETE",
                body:JSON.stringify(delTodo)
              });
             const data = await response.json();
             console.log(delTodo, "del", data);
             const newList = [...list]
             // newList index not equal to checked 
             newList[index].checked = !newList[index].checked;
             const finalList = newList.filter(el => el.checked);
            setTxt(finalList);
            console.log(txt);
            setTimeout(()=>{
                getApi()
             },1000)
      
    }

    function checklist() {
        if (list === null || list.length === 0) {
            return <Placeholder/>
        } else {
           
            return  list.map((item, index) => <ListItem checkStatus={item.checked} deleteHandler={removeFromList} index={index} key={index} text={item.text} dateView={item.time}></ListItem>)
        }
    }

useEffect(()=>{
        getApi()
},[])

    return (
        <div className="List">
        
        
      <div className="todoItems">
        
        { checklist() }
        
       
      </div>
      {/* <div>
      <p className='warning'>{txt}</p>
      </div> */}
     
   
      <form className={!show?"todoInput":"todoHide"} >
      <h4 className='label-todo'>ToDo List</h4>
        <input onChange={e => setListInput(e.target.value)} value={listInput} type="text" placeholder='Enter your todo here ...' />
        
        <h4 className='label-reminder'>Add Reminder</h4>
        <input onChange={e => setVal(e.target.value)} value={val} type="datetime-local" placeholder='date and time' />
        
        <button onClick={addToList} type='submit'>Add</button>
        
        </form>
        <div className="displayDiv">
            <button onClick={()=> setShow(!show)} className={!show?'btn2':'btn1'}> {!show? "Hide Input":"Click here to Add to do"}</button>
        </div>
    </div>
    )
}