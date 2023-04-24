import { useRef, useEffect } from 'react';
import List from "../List/List"
import './index.css';

import { useAuth0 } from "@auth0/auth0-react";
import Nav from '../Nav';

function Todo() {
  const { isAuthenticated } = useAuth0();
  const timeRef = useRef();
  const dateRef = useRef();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const time = currentDate.toLocaleTimeString();
      const date = currentDate.toDateString();
      timeRef.current.innerText = time;
      dateRef.current.innerText = date;
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    isAuthenticated && <div className='mainDiv'>
   
     
     
      <div className='digiClock'>
      <Nav/>
        <span ref={dateRef}></span> <span ref={timeRef}></span>
      </div>
      <List />
      </div>
    
  );
}


export default Todo;
