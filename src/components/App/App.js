import "./App.css";
import { SignInPage } from "../SignInPage";
import { Routes, Route} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import List from "../List/List";
import Profile from "../Profile";


function App() {
  const { isAuthenticated } = useAuth0();


  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={!isAuthenticated ? <SignInPage /> : <List />}
        />
        <Route
          path="/profile"
          element={!isAuthenticated ? <SignInPage /> : <Profile />}
        />
      </Routes>
    </div>
  );
}

export default App;
