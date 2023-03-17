import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import exampleService from "../../services/example.service";
import NavLogIn from "../../components/NavLogIn/NavLogIn";
import { Button } from "react-bootstrap";
import './AddPost.css'

function AddPost({ toggleHiddenH }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [loading, setLoading] = useState(true);

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleTags = (e) => setTags(e.target.value);
  const handleFileUpload = (e) => {
    // console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();

    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new movie in '/api/movies' POST route
    uploadData.append("imageUrl", e.target.files[0]);

    exampleService
      .uploadImage(uploadData)
      .then((response) => {
        // console.log("response is: ", response);
        // response carries "fileUrl" which we can use to update the state
        setImgUrl(response.fileUrl);
        setLoading(false);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hello");
    const body = { title, description, tags, imgUrl };
    try {
      await exampleService.addPost(body);
      navigate(`/profilePage`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavLogIn toggleHiddenH={toggleHiddenH} />
      <section className="section2">
        <div className="following2">
          <div className="titleDiv2">
            <h4 className="titlePost">Create a Post</h4>
          </div>

          <form className="form2" onSubmit={handleSubmit}>
            <label className="line" htmlFor="email">
              Title:
            </label>
            <input
              className="signInput"
              type="email"
              name="email"
              value={title}
              onChange={handleTitle}
            />
            <label className="line" htmlFor="description">
              description
            </label>
            <input
              className="signInput"
              type="text"
              name="description"
              value={description}
              onChange={handleDescription}
            />
            <label className="line" htmlFor="tags">
              tags
            </label>
            <input
              className="signInput"
              type="text"
              name="tags"
              value={tags}
              onChange={handleTags}
            />
            <input type="file" onChange={(e) => handleFileUpload(e)} className="fileUpload"/>

            {!loading ? (
              <Button variant="warning" className="disabledButton" size="md">
                Submit
              </Button>
            ) : (
              <Button
                variant="warning"
                className="disabledButton"
                size="md"
                disabled
              >
                Submit
              </Button>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

export default AddPost;

/* <form className="signup" onSubmit={handleSignupSubmit}>
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

        <label className="line" htmlFor="username">
          Name:
        </label>
        <input
          className="signInput"
          type="text"
          name="username"
          value={username}
          onChange={handleUserame}
        />

        <button
          className="submitButton button-6"
          type="submit"
          onClick={toggleHiddenL}
        >
          Sign Up
        </button>
      </form>*/
