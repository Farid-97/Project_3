import "./Login.css";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import axios from "axios";
import React from "react";
import authService from "../../services/auth.service";



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const {authenticateUser} = useContext(AuthContext)

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = async(e) => {
    e.preventDefault();
    const requestBody = { email, password };

     // Send a request to the server using axios
      try {
        const response = await authService.login(requestBody);
        localStorage.setItem("authToken", response.data.authToken);
        authenticateUser();
        navigate("/feed");
      } catch (error) {
        console.log(error);
      }
    };

 
  

  return (
    <div className="LoginPage">
      <form class="login-form" action="javascript:void(0);" onSubmit={handleLoginSubmit}>
  <h1>Login</h1>
  <div class="form-input-material">
    <input type="email" name="email"   value={email} onChange={handleEmail} class="form-control-material" />
    <label for="username">Email</label>
  </div>
  <div class="form-input-material">
    <input type="password" name="password" value={password}
          onChange={handlePassword} class="form-control-material" required />
    <label htmlFor="password">Password</label>
  </div>
  <button type="submit" class="btn btn-primary btn-ghost">Login</button>
</form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Don't have an account yet?</p>
      <Link to={"/signup"}> Sign Up</Link>
    </div> 
  ); 
}

export default Login;
