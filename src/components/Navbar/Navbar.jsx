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

  <div class="collapse navbar-collapse" id="navbarSupportedContent">  </div>
    <ul class="navbar-nav mr-auto"> </ul>
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
      
      
    
   
     </>

)}
</nav>
      

  



export default Navbar;

