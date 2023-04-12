import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./index.css"

const SignOutButton = () => {
  const { logout } = useAuth0();

  return (
 
    <li href={window.location.origin} onClick={() => logout({ returnTo: window.location.origin })}>
      Sign Out
    </li>
   
  );
};

export default SignOutButton;