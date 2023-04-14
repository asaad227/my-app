import { useRef, useEffect } from 'react';
import List from "../List/List"
import './index.css';

import { useAuth0 } from "@auth0/auth0-react";
import Menu from '../Menu';

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
    isAuthenticated && <div>
      <Menu />
      <h5 className='digiClock'>
        <span ref={dateRef}></span> <span ref={timeRef}></span>
      </h5>
      <List />
    </div>
  );
}


export default Todo;
