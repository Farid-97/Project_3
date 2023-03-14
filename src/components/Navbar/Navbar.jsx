import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import authService from "../../services/auth.service";
import React, { useState } from "react";
import Search from '../../components/Searchbar/Search';

function Navbar({ toggleHiddenS, toggleHiddenL,toggleHiddenH, searchPost }) {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, logOutUser } = useContext(AuthContext);
  
  return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  {isLoggedIn && (
<>
<Link to="/feed" class="navbar-brand">Feed</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
   aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    <Search searchPost={searchPost}/>
  <Link to="/profilePage">
    <button>Profile</button>
  </Link>
  <button onClick={event => {logOutUser(); toggleHiddenH()}}>Logout</button>
</>
)}

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
{!isLoggedIn && (
<>
            <Link to="/">
            <button className="entry" onClick={toggleHiddenH}>
              Home
            </button>
          </Link>
          <button className="entry" onClick={toggleHiddenS}>
            Signup
          </button>

          <button className="entry" onClick={toggleHiddenL}>
            Login
          </button>
      {/* <li class="nav-item active">
        <a onClick={toggleHiddenS} class="nav-link" href="#">Signup<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        
        <a  onClick={toggleHiddenL} class="nav-link" href="#">Login</a>
      </li> */}
      </>
)}
      
      
    </ul>
    </div>
</nav>
  
  );
}

export default Navbar;

