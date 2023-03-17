import "./Login.css";
import { useState, useContext } from "react";
import { Link ,useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import React from "react";
import axios from "axios";

function Login({toggleHiddenH}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storedToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    // Send a request to the server using axios

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        requestBody,{ headers: { Authorization: `Bearer ${storedToken}` },
      }
      )

      localStorage.setItem("authToken", response.data.authToken);
      authenticateUser();

      navigate("/feed");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <div className="formTitle">
        <h1>Login</h1>
        <Link className="linkCross">
          <img
            className="exitCross"
            src="https://res.cloudinary.com/df3vc4osi/image/upload/v1678934027/movie-gallery/images-removebg-preview_cbnsxm.png"
            alt="exit"
            onClick={toggleHiddenH}
          />
        </Link>
      </div>
      <form className="signup" onSubmit={handleLoginSubmit}>
        <label className="line" htmlFor="email">
          Email:
        </label>
        <input
          className="signInput"
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
        />

        <label className="line" htmlFor="password">
          Password:
        </label>
        <input
          className="signInput"
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        <button
          className="submitButton button-6"
          type="submit"
          
        >
          Login
        </button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default Login;
