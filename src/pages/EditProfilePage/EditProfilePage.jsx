import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import exampleService from "../../services/example.service";
import NavLogIn from "../../components/NavLogIn/NavLogIn";
import Button from "react-bootstrap/Button";

function EditProfilePage({toggleHiddenH}) {
  const [username, setUsername] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [loading, setLoading] = useState(true);

  const handleUsername = (e) => setUsername(e.target.value);

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
    const body = { username, imgUrl };
    try {
      await exampleService.editUser(body);
      navigate("/profilePage");
    } catch (error) {
      console(error);
    }
  };
  return (
    <section className="section2 sectionOver">
      <div className="following">
        <h1>Edit your Profile</h1>
        <NavLogIn toggleHiddenH={toggleHiddenH}/>
      <form onSubmit={handleSubmit} className="form2">
          <label htmlFor="title">Title</label>
          <input
            className="addInput"
            type="text"
            name="title"
            value={username}
            onChange={handleUsername}
          />
          <label htmlFor="description">Description</label>
          <input
            className="addInput"
            type="text"
            name="description"
            value={imgUrl}
            onChange={imgUrl}
          />
          <label htmlFor="description">Profile Picture</label>
          <input type="file" onChange={(e) => handleFileUpload(e)} />

          {!loading ? (
            <Button variant="warning" className="disabledButton" onSubmit={handleSubmit} size="md" disabled>
        Button
      </Button>
          ) : (
            <Button variant="warning" className="disabledButton" size="md" disabled>
        Button
      </Button>
          )}
        </form>
      </div>
    </section>
  );
}

export default EditProfilePage;
