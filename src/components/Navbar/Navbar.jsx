import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
/* 
import Search from "../../components/Searchbar/Search"; */

import "./Navbar.css";

function Navbar({ toggleHiddenS, toggleHiddenL, toggleHiddenH, searchPost }) {
  
  const navigate = useNavigate();
  
  const refreshPage = () =>{
    navigate('/feed')
    window.location.reload(false)
  }

  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {isLoggedIn && (
        <>
          <button onClick={refreshPage}>Feed</button>
          <Link to="/addPost">Create a Post</Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* <Search searchPost={searchPost} /> */}
          <Link to="/profilePage">
            <button>Profile</button>
          </Link>
          <button
            onClick={(event) => {
              logOutUser();
              toggleHiddenH();
            }}
          >
            Logout
          </button>
        </>
      )}

      <div>
        {" "}
      </div>
      <ul > </ul>
      {!isLoggedIn && (
        <>
          <Link to="/">
            <button className="button-48"  onClick={toggleHiddenH}>
              <span className="text">Home</span> 
            </button>
          </Link>
          <button class="button-17" onClick={toggleHiddenS}>
            Signup
          </button>

          <button class="button-17"  onClick={toggleHiddenL}>
            Login
          </button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
