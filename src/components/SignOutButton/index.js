import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./index.css"

const SignOutButton = () => {
  const { logout } = useAuth0();

  return (
 
    <div className="sign-outBtn" href={window.location.origin} onClick={() => logout({ returnTo: window.location.origin })}>
     
          Exit <i class="fa fa-sign-out" aria-hidden="true"></i>
         
    </div>
   
  );
};

export default SignOutButton;