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
    <>
    <NavLogIn toggleHiddenH={toggleHiddenH}/>
    <section className="section2 sectionOver">
    <div className="following2">
          <div className="titleDiv2">
            <h4 className="titlePost">Edit your Profile</h4>
          </div>

          <form className="form2" onSubmit={handleSubmit}>
            <label className="line" htmlFor="username">
              Username
            </label>
            <input
              className="signInput"
              type="email"
              name="email"
              value={username}
              onChange={handleUsername}
            />
            <label className="line" htmlFor="imgUrl">Profile Picture</label>
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

export default EditProfilePage;
