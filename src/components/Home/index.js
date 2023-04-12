
import React, {useState, useEffect} from "react";


import List from "../List/List";
import Menu from "../Menu";
// import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const [time, setTime] = useState();
  const [date, setDate]= useState();
  const [listInput, setListInput] = useState("");
    const [val, setVal] = useState("");
    const [txt, setTxt] = useState([]);
    const [show, setShow] = useState();
    const [list, setList] = useState(() => {
        const storedList = localStorage.getItem("toDoList");
        return storedList ? JSON.parse(storedList) : [];
      });
      // const { user } = useAuth0();
    

    //   useEffect(()=>{
    //     localStorage.setItem("toDoList", JSON.stringify(list))
      
    //  },[list])

     function updateItem(){
      let currentDate = new Date();
      // casting the dateobject or comparison need date local string.
      let day = currentDate.toLocaleDateString();
      let time=currentDate.toLocaleTimeString();
     let year = day.slice(6, 10);
     let dated1 = day.slice(0, 2);
     let month = day.slice(3, 5);
     let hrsMin = time.slice(0,5);
     let hrs = time.slice(0,2);
    //    let firstMin = time.slice(3,4)
     let min =Number(time.slice(3,5)) + Number(1);
     // if min become single digit need to add "0" in fornt of the digit
    if(min < 10){
      min = "0"+min
    }
    console.log(min);
     var newHrsMin=`${hrs}:${min}`
     console.log(newHrsMin);
     //casting from day and time to year, month, day, hrs and minutes to put into variable 
     //to comare with currentime to due date variable.
     let timeV = `${year}-${month}-${dated1}T${hrsMin}`
     let timeV2 = `${year}-${month}-${dated1}T${newHrsMin}`
     
    
    
          //compare time now minutes and due date setup time minutes 
       
    
      
          for(let i = 0; i < list.length; i++){
    
          var dateTodo = list[i].date;
          console.log(dateTodo === timeV2);
          if(dateTodo === timeV2 && list[i].checked === false ){
              setTxt(`You have one minute to complete your ${list[i].text} task hurry up!!!`);
           }else{
               setTxt("")
              
           }
         
          if(dateTodo === timeV){
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

    useEffect(()=>{
      if(list.length !== 0){
        updateItem()
      }
    },)
    
  
  
    useEffect(()=>{
      showTime()
  })
      function showTime(){
          let currentDate = new Date();
          let time= currentDate.toLocaleTimeString()
          let date = currentDate.toDateString()
        setDate(date) 
        setTime(time)
         setTimeout(showTime, 1000)
        }
  
  
  return (
    <div>
    <h5 className='digiClock'>{date} {time}</h5>
    <Menu/>  
   <List txt={txt} setTxt={setTxt} setList={setList} listInput={listInput} setListInput={setListInput} val={val} setVal={setVal} show={show} setShow={setShow} list={list
   }/>
    </div>
  );
};
export default Home;
