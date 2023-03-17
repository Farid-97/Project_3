import React, { useState, useEffect } from "react";
import exampleService from "../../services/example.service";
import NavLogIn from "../../components/NavLogIn/NavLogIn";

function Following() {
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
    <div>
      {thisUser && (
        <>
          {thisUser.following.map((user) => {
            return (
              <div>
              <div>
                <img src={user.imgUrl} alt={user.username} />
              </div>
              <div><b>{user.username}</b></div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default Following;
