import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import exampleService from "../../services/example.service";
import "./Following.css";
import Button from 'react-bootstrap/Button';

function Following({ toggleFollowing }) {
  const [thisUser, setThisUser] = useState(false);

  const getThisUser = async () => {

    try {
      const response = await exampleService.getUser();
      setThisUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getThisUser();
  }, []);
  return (
    <div className="following">
      <div className="titleDiv">
        <h4 className="title">Following</h4>
        <Link>
          <img
            className="exitCross"
            src="https://res.cloudinary.com/df3vc4osi/image/upload/v1678934027/movie-gallery/images-removebg-preview_cbnsxm.png"
            alt="exit"
            onClick={toggleFollowing}
          />
        </Link>
      </div>
      {thisUser && (
        <>
          {thisUser.following.map((user) => {
            return (
              <>
                <div className="eachUser">
                  <div className="userInfo">
                    <Link className="link" to={`/userProfile/${user._id}`}><img
                      className="userImage"
                      src={user.imgUrl}
                      alt={user.username}
                    />
                    <b className="userName">{user.username}</b>
                    </Link>
                  </div>
                  <Link className="link unFollow" to={`/userProfile/${user._id}`}><Button variant="outline-dark">Go to Profile</Button></Link>
                </div>
              </>
            );
          })}
        </>
      )}
    </div>
  );
}

export default Following;
