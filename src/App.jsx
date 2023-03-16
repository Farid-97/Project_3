import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import PostPage from "./pages/PostPage/PostPage";
import WelcomePage from "./pages/InitialPage/WelcomePage";
import AddPost from "./pages/AddPost/AddPost";
import PostEdit from "./pages/PostEdit/PostEdit";
import EditProfilePage from "./pages/EditProfilePage/EditProfilePage";
import UserProfile from "./pages/UserProfile/UserProfile";
import Following from "./pages/Following/Following";

import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import IsLogged from "./components/IsLogged/IsLogged";
import exampleService from "./services/example.service";


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

  const getAllPosts = async () => {
    try {
      const response = await exampleService.getAllPosts();
      setAllPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const searchPost = (query) => {
    const filteredPostList = allPosts.filter((post) =>
      post.tags.toLowerCase().includes(query.toLowerCase())
    );
    setShowAllPosts(filteredPostList);
  };

  return (
    <div className="App">
      <Navbar
        toggleHiddenS={toggleHiddenS}
        toggleHiddenL={toggleHiddenL}
        toggleHiddenH={toggleHiddenH}
        searchFood={searchPost}
      />

      <Routes>
        <Route path="/" element={<IsLogged><HomePage hiddenS={hiddenS} hiddenL={hiddenL} toggleHiddenL={toggleHiddenL}/></IsLogged>}/>
        <Route path="/editPost/:id" element={<PostEdit />} />
        <Route path="/following" element={<Following/>} />
        <Route path="/addPost" element={<AddPost />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/profilePage" element={<ProfilePage />} />
        <Route path="/login" element={<IsAnon><Login /></IsAnon>}/>
        <Route path="/userProfile/:id" element={<UserProfile/>}/>
        <Route path="/editProfile" element={<EditProfilePage />} />
        <Route path="/feed" element={<IsPrivate><WelcomePage /></IsPrivate>}/>
      </Routes>
    </div>
  );
}

export default App;