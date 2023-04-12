import "./App.css";
import { SignInPage } from "../SignInPage";
import { Routes, Route} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "../Home";
import Profile from "../Profile";


function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={!isAuthenticated? <SignInPage />: <Profile/>}
        />
         <Route
          path="/home"
          element={isAuthenticated && <Home />}
        />
        <Route
          path="/profile"
          element={isAuthenticated && <Profile />}
        />
      </Routes>
    </div>
  );
}

export default App;
