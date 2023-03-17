import React, { useState, useEffect } from "react";
import exampleService from "../../services/example.service";
import { Link } from "react-router-dom";
import "../InitialPage/InitialPage.css";
import NavLogIn from "../../components/NavLogIn/NavLogIn";

function InitialPage({toggleHiddenH}) {
  const [posts, setPosts] = useState(null);

  const getPosts = async () => {
    try {
      const response = await exampleService.getAllPosts();
      let copy = [...response.data];
      let currentIndex = copy.length;
      while (currentIndex !== 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        let temporaryValue = copy[currentIndex];
        copy[currentIndex] = copy[randomIndex];
        copy[randomIndex] = temporaryValue;
      }
      setPosts(copy);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
    <NavLogIn toggleHiddenH={toggleHiddenH}/>
    <div className="image">
      {posts &&
        posts.map((post) => {
          return (
            <div className="idPic">
            <Link to={`/post/${post._id}`}>
              <img
                className="postsPic"
                src={post.imgUrl}
                alt={post.title}
                key={post._id}
              />
            </Link>
            </div>
          );
        })}
    </div>
    </>
  );
}

export default InitialPage;
