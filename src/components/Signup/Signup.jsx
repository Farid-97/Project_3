import React from "react";
import "./Signup.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import authService from "../../services/auth.service";

function Signup({ toggleHiddenL, toggleHiddenH }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);


  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleUserame = (e) => setUsername(e.target.value);

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, username };

    // Send a request to the server using axios
    try {
      await authService.signup(requestBody)
      toggleHiddenL();
    } catch (error) {
      console.log(error);
    }
  };

  // Or using a service
  /*  authService
      .signup(requestBody)
      .then((response) => {
        // If the POST request is successful redirect to the login page
        navigate("/login");
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      }); */

  return (
    <div className="form">
      <div className="formTitle">
        <h1>Sign Up</h1>
        <Link className="linkCross">
          <img
            className="exitCross"
            src="https://res.cloudinary.com/df3vc4osi/image/upload/v1678934027/movie-gallery/images-removebg-preview_cbnsxm.png"
            alt="exit"
            onClick={toggleHiddenH}
          />
        </Link>
      </div>
      <form className="signup" onSubmit={handleSignupSubmit}>
        <label className="line" htmlFor="email">
          Email:
        </label>
        <input
          className="signInput"
          type="email"
          name="email"
          onChange={handleEmail}
        />

        <label className="line" htmlFor="password">
          Password:
        </label>
        <input
          className="signInput"
          type="password"
          name="password"
          onChange={handlePassword}
        />

        <label className="line" htmlFor="username">
          Name:
        </label>
        <input
          className="signInput"
          type="text"
          name="username"
          onChange={handleUserame}
        />

        <button
          className="submitButton button-6"
          type="submit"
        >
          Sign Up
        </button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default Signup;

/* axios.post(
  `${process.env.REACT_APP_API_URL}/auth/signup`,
  requestBody
) */