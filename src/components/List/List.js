import React from 'react';
import Form from '../Form';
import Checklist  from '../Checklist';
import Button from '../Button';


export default function List({ show, setListInput, list, setList,listInput, val, setTxt, setVal, setShow}) { 
function removeAll(index){
    const newList = [...list];
    newList[index] =!newList[index]
    const removeList = newList.filter(e=> !e);
    setList(removeList)
    localStorage.clear()
}



    function addToList() {
        let newList=[];
        // Output: Sat Apr 01 2023 01:53:25
  
   //casting from day and time to year, month, day, hrs and minutes to put into variable 
   //to comare with currentime to due date variable.

 
        const todo = listInput[0].toUpperCase()+listInput.slice(1)
        const newListItem = {
            text: todo,
            date:val,
            checked: false
        }
        if (list.length === 0) {
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
        localStorage.setItem('toDoList', JSON.stringify(newList));
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
   

     


    
 
  
    

   
         
   
   
    return (
        <div className="List"> 
      <div className="todoItems">
        <Checklist removeFromList={removeFromList} list={list}/>
      </div>
      <Form addToList={addToList} show={show} setListInput={setListInput} listInput={listInput} val={val} setVal={setVal}/>
     <Button setShow={setShow} show={show} removeAll={removeAll}/>
       
    </div>
    )
}
