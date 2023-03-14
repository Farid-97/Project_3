import "./ProfilePage.css";
import { useState, useEffect } from "react";
import exampleService from "../../services/example.service";
import { Link } from "react-router-dom";

function ProfilePage() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const response = await exampleService.getUser();
      setUser(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h1>Profile page</h1>
      {user && user.post.map((post) =>{
        return(
            <div key={post._id}>
              <Link to={`/post/${post._id}`}>
                <h2>{post.title}</h2>
                <h3>{post.description}</h3>
                <img  src={post.imgUrl}/>
              </Link>
            </div>
        )
    })}
    </div>
  );
}

export default ProfilePage;
