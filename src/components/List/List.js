import React, { useEffect, useState} from 'react';
import ListItem from '../ListItem/ListItem';
import Placeholder from '../Placeholder/Placeholder';
import './List.css'
import PostTodo from '../../lib/data/list';

// import Footer from '../Footer/indx';

export default function List() {
    const [listInput, setListInput] = useState("");
    const [val, setVal] = useState("");
    const [txt, setTxt] = useState();
    const [show, setShow] = useState();
    const [list, setList] = useState()
 
console.log(list.text);
    function addToList() {
        let newList=[];
        // Output: Sat Apr 01 2023 01:53:25
        const todo = listInput[0].toUpperCase()+listInput.slice(1)
        const newListItem = {
            text: todo,
            date:val,
            checked: false
        }
        if (list === null || list.length === 0) {
            newList = [];
        } else {
            newList = [...list];
        }
        //this if clause not going to allow anymore txt to added to the list when list
        // less then 6.
       if(list.length > 5){
       alert("Maximum entry entered. Please delete one then add one!!")
       }else{
        newList.push(newListItem);
        <PostTodo todo={newList}/>;
        setList(newList);
        setListInput("")
       }
           
       
      
       
    }

    function removeFromList(index) {
        //spreeding the list
        const newList = [...list]
        // newList index not equal to checked 
        newList[index].checked = !newList[index].checked;
        setList(newList)
        //useing setTimeout to clear the checkbox after 1sec
        setTimeout(() => {
            const finalList = newList.filter(el => !el.checked);
            localStorage.setItem('toDoList', JSON.stringify(finalList));
            setList(finalList);
        }, 1000)
    }
    function checklist() {
        if (list === null || list.length === 0) {
            return <Placeholder/>
        } else {
            return  list.map((item, index) => <ListItem checkStatus={item.checked} deleteHandler={removeFromList} index={index} key={index} text={item.text} dateView={item.date}></ListItem>)
        }
    }

    
  useEffect(() => {
 if(list === null || list.length === 0){
    checklist()
 }else{
    updateItem()
 }
  },)
  
    

   
function updateItem(){
    let currentDate = new Date();
    // casting the dateobject to use general purpose.
    let day = currentDate.toLocaleDateString();
    let time=currentDate.toLocaleTimeString();
   let year = day.slice(6, 10);
   let dated1 = day.slice(0, 2);
   let month = day.slice(3, 5);
   let hrsMin = time.slice(0,5);
   let hrs = time.slice(0,2);
   let firstMin = time.slice(3,4)
   let min =Number(time.slice(4,5)) + Number(1);
   var newHrsMin=`${hrs}:${firstMin+min}`
   console.log(newHrsMin,firstMin);
   //casting from day and time to year, month, day, hrs and minutes to put into variable 
   //to comare with currentime to due date variable.
   let timeV = `${year}-${month}-${dated1}T${hrsMin}`
   let timeV2 = `${year}-${month}-${dated1}T${newHrsMin}`

    for(let i = 0; i < list.length; i++){
        //compare time now minutes and due date setup time minutes 
        
        if(list[i].date === timeV2 ){
            setTxt(`You have one minute to complete your ${list[i].text} task hurry up!!!`);
         }else{
             setTxt("")
         }
       
        if(list[i].date === timeV){
            //if match list checked property will change to true
            list[i].checked = true;
          
          //need to update local storage according to recent update 
          // so need to spreed the list then filter out checked item
          // then sent new list to the localstorage
          // and also update setList with final list
            const newList =[...list]
            setTimeout(() => {
                const finalList = newList.filter(el => !el.checked);   
                localStorage.setItem('toDoList', JSON.stringify(finalList));
                setList(finalList);
            }, 2000)
        }
       
       
        
}
                       
    }
  
      
   
    return (
        <div className="List">
        
        
      <div className="todoItems">
        
        { checklist() }
       
      </div>
      <div>
      <p className='warning'>{txt}</p>
      </div>
     
   
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