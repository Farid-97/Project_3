import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import exampleService from "../../services/example.service";

function AddPost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [size, setSize] = useState('');
  const [loading, setLoading] = useState(true);

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescreption = (e) => setDescription(e.target.value);
  const handleTags = (e) => setTags(e.target.value);
  const handleSize = (e) => setSize(e.target.value);
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
    const body = { title, description, tags, imgUrl, size };
    console.log(size);
    try {
      await exampleService.addPost(body);
      navigate(`/profilePage`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" value={title} onChange={handleTitle} />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleDescreption}
        />
        <label htmlFor="title">Tags</label>
        <input type="text" name="title" value={tags} onChange={handleTags} />
        <label>Size</label>
        <select onChange={handleSize}>
          <option value="Large" selected>Large</option>
          <option value="Medium">Medium</option>
        </select>
        <label htmlFor="description"> Post</label>
        <input type="file" onChange={(e) => handleFileUpload(e)} />
        
        {!loading ? (
          <button type="submit" onSubmit={handleSubmit}>
            Submit
          </button>
          
        ) : <h6>Submit</h6>}
        </form>
    </section>
  );
}

export default AddPost;
