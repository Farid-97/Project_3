import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import exampleService from "../../services/example.service";
import NavLogIn from "../../components/NavLogIn/NavLogIn";
import { Button } from "react-bootstrap";


function AddPost({toggleHiddenH}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [loading, setLoading] = useState(true);

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescreption = (e) => setDescription(e.target.value);
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
    <NavLogIn toggleHiddenH={toggleHiddenH}/>
    <section className="section2">
      <div className="following">
        
      <h1>Create a Post</h1>
        <form onSubmit={handleSubmit} className="form2">
          <label htmlFor="title">Title</label>
          <input
            className="addInput"
            type="text"
            name="title"
            value={title}
            onChange={handleTitle}
          />
          <label htmlFor="description">Description</label>
          <input
            className="addInput"
            type="text"
            name="description"
            value={description}
            onChange={handleDescreption}
          />
          <label htmlFor="title">Tags</label>
          <input className="addInput" type="text" name="title" value={tags} onChange={handleTags} />
          <label htmlFor="description"> Post</label>
          <input type="file" onChange={(e) => handleFileUpload(e)} />

          {!loading ? (
            <button type="submit" onSubmit={handleSubmit}>
              Submit
            </button>
          ) : (
            <Button variant="warning" className="disabledButton" size="md" disabled>
        Button
      </Button>
          )}
        </form>
      </div>
    </section>
    </>
  );
}

export default AddPost;
