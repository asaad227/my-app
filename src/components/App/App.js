// import { useState,useEffect } from 'react';
import List from '../List/List';
import './App.css';

function App() {
  // const [time, setTime] = useState();
  // const [date, setDate]= useState();

//   useEffect(()=>{
//     showTime()
// })
    // function showTime(){
    //     let currentDate = new Date();
    //     let time= currentDate.toLocaleTimeString()
    //     let date = currentDate.toDateString()
    //   setDate(date) 
    //   setTime(time)
    //    setTimeout(showTime, 1000)
    //   }

    
  return (
    <div className='app'>
      {/* <h5 className='digiClock'>{date} {time}</h5> */}
      <List />
    </div>
   
  );
}

export default App;
