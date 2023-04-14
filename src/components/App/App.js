import "./App.css";
import { SignInPage } from "../SignInPage";
import { Routes, Route} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Asian from "../Asian";
import Profile from "../Profile";
import Fav from "../Fav/Fav";
import Home from "../Home";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <Routes>
        <Route
          path="/home"
          element={ <Home />}
        />
        <Route
          path="/"
          element={isAuthenticated ? <Profile /> : <SignInPage />}
        />
        <Route
          path="/asian"
          element={<Asian />}
        />
        <Route
          path="/fav"
          element={<Fav />}
        />
      </Routes>
    </div>
  );
}

export default App;
