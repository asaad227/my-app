import "./App.css";
import { SignInPage } from "../SignInPage";
import { Routes, Route} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Asian from "../Asian";
import Profile from "../Profile";
import Fav from "../Fav/Fav";
import Todo from "../Todo/index"

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <Routes>
      <Route path="/" element={!isAuthenticated? <SignInPage/>:<Profile />}/>
      <Route path="asian" element={<Asian />}/>
      <Route path="fav" element={<Fav />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
      <Route path='todo' element={<Todo />} />
    </Routes>
    </div>
  );
}

export default App;
