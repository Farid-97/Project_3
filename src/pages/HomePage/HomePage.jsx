import Signup from "../../components/Signup/Signup";
import React, { useState } from "react"
import Login from "../../components/Login/Login";
import "./HomePage.css"

import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";




 function HomePage({hiddenS,hiddenL}) {
 

  
  return (
    <div>
      <h1>Ideal</h1>
      {!hiddenS && <Signup/>}
      {!hiddenL && <Login/>}

      
    </div>
  )
}

export default HomePage