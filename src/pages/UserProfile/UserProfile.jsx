import { useState, useEffect } from "react";
import exampleService from "../../services/example.service";
import { Link, useParams } from "react-router-dom";
import FavouritesSection from "../../components/FavouritesSection/FavouritesSection";
import CreatedSection from "../../components/CreatedSection/CreatedSection";

function UserProfile() {
  const [user, setUser] = useState(false);
  const [favourites, setFavourites] = useState(false);
  const [created, setCreated] = useState(true);
  const [thisUser, setThisUser] = useState(false);
  const [check, setCheck] = useState(false);

  const {id} = useParams();

  const toggleFavourites = () => {
    setFavourites(true);
    setCreated(false);
  };
  const toggleCreated = () => {
    setCreated(true);
    setFavourites(false);
  };

  const getThisUser = async () => {
    try {
      const response = await exampleService.getUser();

      setThisUser(response.data);

      const checked = response.data.following.filter((el) => el._id === id);
      
      //double bang - transforms into boolean
      setCheck(checked);
     
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      const response = await exampleService.getSpecificUser(id);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const follow = async () => {
    try {
      await exampleService.followUser(id);
      setCheck(true);
    } catch (error) {
      console.log(error);
    }
  };

  const dontFollow = async () => {
    try {
      await exampleService.notFollowingUser(id);
      setCheck(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
    getThisUser();
  }, []);

  return (
    <section>
      {user && thisUser && (
        <div>
          <img src={user.imgUrl} alt={user.username} />
          <h2>{user.username}</h2>
          {!user.following.length ? (
            <h2>Following: {user.following.length}</h2>
          ) : (
            <button>Following: {user.following.length}</button>
          )}
          {check ? (<button onClick={dontFollow}>Following</button>) : (<button onClick={follow}>Follow</button>)}
          
        </div>
      )}
      <button onClick={toggleCreated}>Created</button>{" "}
      <button onClick={toggleFavourites}>Favourites</button>
      {user && !favourites && <CreatedSection user={user} />}
      {user && !created && <FavouritesSection user={user} />}
    </section>
  );
}

export default UserProfile;
