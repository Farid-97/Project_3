import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import PostPage from "./pages/PostPage/PostPage";
import WelcomePage from "./pages/InitialPage/InitialPage";
import AddPost from "./pages/AddPost/AddPost";
import PostEdit from "./pages/PostEdit/PostEdit";
import EditProfilePage from "./pages/EditProfilePage/EditProfilePage";
import UserProfile from "./pages/UserProfile/UserProfile";
import Following from "./components/Following/Following";

import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import IsLogged from "./components/IsLogged/IsLogged";
import exampleService from "./services/example.service";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [hiddenS, setHiddenS] = useState(true);
  const [hiddenL, setHiddenL] = useState(true);
  const [allPosts, setAllPosts] = useState(null);
  const [showAllPosts, setShowAllPosts] = useState(null);

  const toggleHiddenS = () => {
    setHiddenS(!hiddenS);
    setHiddenL(true);
  };
  const toggleHiddenL = () => {
    setHiddenL(!hiddenL);
    setHiddenS(true);
  };

  const toggleHiddenH = () => {
    setHiddenL(true);
    setHiddenS(true);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IsLogged><HomePage hiddenS={hiddenS} hiddenL={hiddenL} toggleHiddenL={toggleHiddenL} toggleHiddenS={toggleHiddenS} toggleHiddenH={toggleHiddenH}/></IsLogged>}/>
        <Route path="/editPost/:id" element={<IsPrivate><PostEdit toggleHiddenH={toggleHiddenH}/></IsPrivate>} />
        <Route path="/addPost" element={<IsPrivate><AddPost toggleHiddenH={toggleHiddenH}/></IsPrivate>} />
        <Route path="/post/:id" element={<IsPrivate><PostPage toggleHiddenH={toggleHiddenH}/></IsPrivate>} />
        <Route path="/profilePage" element={<IsPrivate><ProfilePage toggleHiddenH={toggleHiddenH}/></IsPrivate>} />
        <Route path="/userProfile/:id" element={<IsPrivate><UserProfile toggleHiddenH={toggleHiddenH}/></IsPrivate>}/>
        <Route path="/editProfile" element={<IsPrivate><EditProfilePage toggleHiddenH={toggleHiddenH}/></IsPrivate>} />
        <Route path="/feed" element={<IsPrivate><WelcomePage toggleHiddenH={toggleHiddenH}/></IsPrivate>}/>
      </Routes>
    </div>
  );
}

export default App;
