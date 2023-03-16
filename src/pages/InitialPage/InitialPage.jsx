import React, { useState, useEffect } from "react";
import exampleService from "../../services/example.service";
import { Link } from "react-router-dom";
import "../InitialPage/InitialPage.css";

function WelcomePage() {
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
    <div className="organization">
      {posts &&
        posts.map((post) => {
          return (
            <Link to={`/post/${post._id}`}>
              <img
                className="postimg"
                src={post.imgUrl}
                alt={post.title}
                key={post._id}
              />
            </Link>
          );
        })}
    </div>
  );
}

export default WelcomePage;
