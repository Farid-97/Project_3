import React, { useState, useEffect } from "react";
import exampleService from "../../services/example.service";
import { Link, useParams, useNavigate } from "react-router-dom";

function PostPage() {
  const [post, setPost] = useState("");
  const [user, setUser] = useState(false);
  const [check, setCheck] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const getPost = async () => {
    try {
      const response = await exampleService.getOnePost(id);
      setPost(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const checkFavourite = async () => {
    try {
      const response = await exampleService.checkFavourite(id);
      setCheck(response.data)
    } catch (error) {
      
    }
  }

  const getUser = async () => {
    try {
      const response = await exampleService.getUser();
      console.log(response.data);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(check)
  const deletePost = async () => {
    try {
      await exampleService.deletePost(id);
      navigate("/profilePage");
    } catch (error) {
      console.log(error);
    }
  };

  const addToFavourites = async (e) => {
    e.preventDefault();
    try {
      await exampleService.addPostFavourites(id);
      setCheck(!check);
    } catch (error) {
      console.log(error);
    }
  };

  const removeAsFavourite = async (e) => {
    e.preventDefault();
    try {
      await exampleService.deletePostFavourites(id);
      setCheck(!check);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
    getUser();
    checkFavourite();
  }, []);

  return (
    <div>
      {user && (
        <>
          <h1>Profile page</h1>
          <div key={post._id}>
            <h2>{post.title}</h2>
            <h3>{post.description}</h3>
            {check ? <Link onClick={removeAsFavourite}>
                      <img
                        src="https://res.cloudinary.com/df3vc4osi/image/upload/v1678876091/Favourites_flhutn.png"
                        alt="Favourite"
                      />
                    </Link> :
                    <Link onClick={addToFavourites}>
                      <img
                        src="https://res.cloudinary.com/df3vc4osi/image/upload/v1678876104/notfavourite_v5mnlh.png"
                        alt="Not Favourite"
                      />
                    </Link>}
            <img src={post.imgUrl} alt={post.title} />
            <button>
              <Link to={`/editPost/${post._id}`}>Edit Post</Link>
            </button>
            <button onClick={deletePost}>Delete Post</button>
          </div>
        </>
      )}
    </div>
  );
}

export default PostPage;
