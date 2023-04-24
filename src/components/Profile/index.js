import React, { useRef, useEffect } from "react";

import { useAuth0 } from "@auth0/auth0-react";

import logo from "../../assets/logo.svg"
import "./Profile.css"
import Nav from "../Nav";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
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

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (

    isAuthenticated && (
      <div className="">
        <Nav/>
        <h5 className='digiClock'>
          <span ref={dateRef}></span> <span ref={timeRef}></span>
        </h5>
        <div className="profile">

          {/* <img className="profilePic" src={user.picture} alt={user.name} /> */}
          <h1 className="profileName">{user.name}</h1>
          <img src={logo} alt="App-logo" className="App-logo" />
        </div>
       
      </div>
    )
  );
};

export default Profile;