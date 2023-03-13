import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

import Login from "./components/Login/Login";

import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";

function App() {

  const [hiddenS, setHiddenS] = useState(true);
  const toggleHiddenS= ()=> {
    setHiddenS(!hiddenS);
    setHiddenL(true);
  }
  const [hiddenL, setHiddenL] = useState(true);
  const toggleHiddenL= ()=> {
    setHiddenL(!hiddenL)
    setHiddenS(true)
  }

  return (
    <div className="App">
      <Navbar toggleHiddenS={toggleHiddenS} toggleHiddenL={toggleHiddenL} />

      <Routes>
        <Route path="/" element={<HomePage hiddenS={hiddenS} hiddenL={hiddenL}/>} />

        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />

        
        <Route
          path="/login"
          element={
            <IsAnon>
              <Login />
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
