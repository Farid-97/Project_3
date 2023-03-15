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
    <section>
      {user && <div>
        <img src={user.imgUrl} alt={user.username} />
        <h2>{user.username}</h2>
        {!user.following.length ? <h2>Following: {user.following.length}</h2> : <button >Following: {user.following.length}</button> }
      </div>}
        <div>
          <Link to={"/editProfile"}>Edit Profile</Link>
        </div>
      {user && user.post.map((post) =>{
        return(
            <div key={post._id}>
              <Link to={`/post/${post._id}`}>
                <h2>{post.title}</h2>
                <h3>{post.description}</h3>
                <img src={post.imgUrl} alt={post.title}/>
              </Link>
            </div>
        )
    })}
    </section>
  );
}

export default ProfilePage;
