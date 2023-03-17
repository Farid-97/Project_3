import "./ProfilePage.css";
import { useState, useEffect } from "react";
import exampleService from "../../services/example.service";
import {Link, useNavigate } from "react-router-dom";
import FavouritesSection from "../../components/FavouritesSection/FavouritesSection";
import CreatedSection from "../../components/CreatedSection/CreatedSection";

function ProfilePage() {
  const [user, setUser] = useState(null);
  const [favourites, setFavourites] = useState(false);
  const [created, setCreated] = useState(true);

  const navigate = useNavigate();

  const toggleFavourites = () => {
    setFavourites(true);
    setCreated(false);
  };

  const toggleCreated = () => {
    setCreated(true);
    setFavourites(false);
  };

  const showFollowing = () => {
    navigate("/following");
  };

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
      {user && (
        <div className="profile">
          <img className="profilepic" src={user.imgUrl} alt={user.username} />
          <h2>{user.username}</h2>
          {!user.following.length ? (
            <h2>Following: {user.following.length}</h2>
          ) : (
            <button className="button-48"  onClick={showFollowing}>
             <span>Following:</span>  {user.following.length}
            </button>
          )}

          <div className="edit">
            <button className="button-48">
              <Link className="text"  to={"/editProfile"}> <span className="text">
                Edit Profile
                </span> </Link>
            </button>
          </div>
        </div>
      )}
      <div className="posts">
        <button className="button-48 " onClick={toggleCreated}>
          <span className="text">Created</span>{" "}
        </button>

        <button class="button-48" onClick={toggleFavourites}>
         <span> Favourites</span> 
        </button>
        {user && !favourites && <CreatedSection user={user} />}
        {user && !created && <FavouritesSection user={user} />}
      </div>
    </section>
  );
}

export default ProfilePage;