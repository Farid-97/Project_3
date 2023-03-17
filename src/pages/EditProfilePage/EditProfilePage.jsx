import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import exampleService from "../../services/example.service";
import NavLogIn from "../../components/NavLogIn/NavLogIn";

function EditProfilePage({toggleHiddenH}) {
  const [username, setUsername] = useState("");
  const [imgUrl, setImgUrl] = useState("");

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
    <div>
      <NavLogIn toggleHiddenH={toggleHiddenH}/>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUsername}
        />
        <label htmlFor="profilePicture">Profile Picture</label>
        <input
          type="file"
          name="profilePicture"
          onChange={(e) => handleFileUpload(e)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditProfilePage;
