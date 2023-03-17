import "./ProfilePage.css";
import { useState, useEffect } from "react";
import exampleService from "../../services/example.service";
import { Link } from "react-router-dom";
import FavouritesSection from "../../components/FavouritesSection/FavouritesSection";
import CreatedSection from "../../components/CreatedSection/CreatedSection";
import Following from "../../components/Following/Following";
import NavLogIn from "../../components/NavLogIn/NavLogIn";

function ProfilePage({ toggleHiddenH }) {
  const [user, setUser] = useState(null);
  const [favourites, setFavourites] = useState(false);
  const [created, setCreated] = useState(true);
  const [hiddenF, setHiddenF] = useState(true);

  const toggleFavourites = () => {
    setFavourites(true);
    setCreated(false);
  };

  const toggleCreated = () => {
    setCreated(true);
    setFavourites(false);
  };

  const toggleFollowing = () => {
    setHiddenF(!hiddenF);
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
    <>
    <NavLogIn toggleHiddenH={toggleHiddenH}/>
    <section className="section1">
      {!hiddenF && <Following toggleFollowing={toggleFollowing} />}
      {user && (
        <>
          <div className="profile">
            <img className="profilePic" src={user.imgUrl} alt={user.username} />
            <h2>{user.username}</h2>
            {!user.following.length ? (
              <h2>Following: {user.following.length}</h2>
            ) : (
              <button className="button-48" onClick={toggleFollowing}>
                <span className="text">Following: {user.following.length}</span>
              </button>
            )}
            <div className="editDiv">
              <Link className="button-48" to={"/editProfile"}>
                <span className="text">Edit Profile</span>
              </Link>
            </div>
          </div>
        </>
      )}
      <div className="postSection">
        <div className="createdDiv">
          <button className="button-48 editDiv" onClick={toggleCreated}>
            <span className="text">Created</span>
          </button>
        </div>
        <div>
          <button className="button-48 editDiv" onClick={toggleFavourites}>
            <span className="text">Favourites</span>
          </button>
        </div>
      </div>
      {user && !favourites && <CreatedSection user={user} />}
      {user && !created && <FavouritesSection user={user} />}
    </section>
    </>
  );
}

export default ProfilePage;

/* <section className="section1">
      {!hiddenF && <Following toggleFollowing={toggleFollowing} />}
      {user && (
        <>
          <div className="profile">
            <img className="profilePic" src={user.imgUrl} alt={user.username} />
            <h2>{user.username}</h2>
            {!user.following.length ? (
              <h2>Following: {user.following.length}</h2>
            ) : (
              <button className="button-48" onClick={toggleFollowing}>
                <span className="text">Following: {user.following.length}</span>
              </button>
            )}
            <div className="editDiv">
              <Link className="button-48" to={"/editProfile"}>
                <span className="text">Edit Profile</span>
              </Link>
            </div>
          </div>
        </>
      )}
      <div className="postSection">
        <div className="createdDiv">
          <button className="button-48 editDiv" onClick={toggleCreated}>
            <span className="text">Created</span>
          </button>
        </div>
        <div>
          <button className="button-48 editDiv" onClick={toggleFavourites}>
            <span className="text">Favourites</span>
          </button>
        </div>
      </div>
      {user && !favourites && <CreatedSection user={user} />}
      {user && !created && <FavouritesSection user={user} />}
    </section> */
