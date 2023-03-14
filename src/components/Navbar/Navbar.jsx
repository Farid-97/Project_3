import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import authService from "../../services/auth.service";
import React, { useState } from "react";

function Navbar({ toggleHiddenS, toggleHiddenL,toggleHiddenH }) {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  

 

 
  return (
    <div class="container-fluid">
    <Link to="/" onClick={toggleHiddenH}> <img className="logo" src="https://assets.turbologo.com/blog/en/2021/11/14085618/pinterest-emblem.png" alt="company logo" /> </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class=" collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto ">
        <li class="nav-item">
          <Link to="/" class="nav-link mx-2 active" aria-current="page" href="#"  onClick={toggleHiddenH}>Home </Link> 
        </li>
          
        {isLoggedIn && (
            <>
              <a class="button-77" role="button" onClick={logOutUser}>Logout</a>
    
              <Link to="/profile">
                <a>Profile</a>
                {/* <img src="https://picsum.photos/id/402/200/300" style={{ width: 50, height: 50, borderRadius: 25}} alt="profile" /> */}
              </Link>
    
              <span>{user && user.name}</span>
            </>
          )}
          {!isLoggedIn && (
            <>
             <li class="nav-item">
          <a class="nav-link mx-2" href="#" onClick={toggleHiddenS}>Signup</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2" href="#"  onClick={toggleHiddenL}>Login</a>
        </li>
              
            </>
          )}
        
       
      </ul>
    </div>
    </div>
  )
          }

export default Navbar
