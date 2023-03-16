import React, { useState, useEffect } from "react";
import exampleService from "../../services/example.service";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./PostPage.css";

function PostPage() {
  const [post, setPost] = useState("");
  const [thisUser, setThisUser] = useState(false);
  const [check, setCheck] = useState(false);
  const [comment, setComment] = useState("");
  const { id } = useParams();

  const navigate = useNavigate();
  console.log(thisUser);

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { comment };
    try {
      const newComment = await exampleService.createComment(id, body);
      console.log("looool", newComment.data);
    } catch (error) {
      console.log(error);
    }
    getPost();
  };

  const getPost = async () => {
    try {
      const response = await exampleService.getOnePost(id);
      setPost(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      const response = await exampleService.getUser();

      setThisUser(response.data);
      const checked = response.data.favourites.filter((el) => el._id === id);
      //double bang - transforms into boolean
      setCheck(!!checked.length);
    } catch (error) {
      console.log(error);
    }
  };

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
      setCheck(true);
    } catch (error) {
      console.log(error);
    }
  };

  const removeAsFavourite = async (e) => {
    e.preventDefault();
    try {
      await exampleService.deletePostFavourites(id);
      setCheck(false);
    } catch (error) {
      console.log(error);
    }
  };
  const removeComment = async (e) => {
    const commentId = e.target.dataset.value;
    try {
      await exampleService.removeComment(id, commentId);
      getPost();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
    getUser();
  }, []);

  return (
    <div className="mainDiv">
      {thisUser && post && (
        <>
          <div key={post._id} className="postDiv">
            <div className="postImgDiv">
              <img className="postImg" src={post.imgUrl} alt={post.title} />
            </div>
            <div className="infoCom">
              <div className="infoDiv">
                {post.createdBy.find((el) => el._id === thisUser._id) && (
                  <>
                    <button className="buttons editButton">
                      <Link to={`/editPost/${post._id}`} className="link">
                        Edit Post
                      </Link>
                    </button>
                    <button onClick={deletePost} className="delButton">
                      Delete Post
                    </button>
                  </>
                )}
                {check ? (
                  <Link onClick={removeAsFavourite}>
                    <img
                      className="favIcon"
                      src="https://res.cloudinary.com/df3vc4osi/image/upload/v1678876091/Favourites_flhutn.png"
                      alt="Favourite"
                    />
                  </Link>
                ) : (
                  <Link onClick={addToFavourites}>
                    <img
                      className="favIcon"
                      src="https://res.cloudinary.com/df3vc4osi/image/upload/v1678876104/notfavourite_v5mnlh.png"
                      alt="Not Favourite"
                    />
                  </Link>
                )}
              </div>
              <div className="titleDescr">
                <h2>{post.title}</h2>
                <p className="description">{post.description}</p>
              </div>
              <div className="commentsDiv">
                {post.comments.map((comment) => {
                  return (
                    <div className="commentDiv">
                      <div class="picComDiv">
                        <img
                          className="picComment"
                          src={comment.userId[0].imgUrl}
                          alt="profilePicture"
                        />
                      </div>
                      <div className="userComDiv">
                        {thisUser._id === comment.userId[0]._id ? (
                          <>
                            <div>
                              <p className="comment">
                                <b>{comment.userId[0].username}</b>{" "}
                                {comment.comment}
                              </p>
                            </div>
                            <div>
                              <img
                                className="deleteCom"
                                src="https://res.cloudinary.com/df3vc4osi/image/upload/v1678934027/movie-gallery/images-removebg-preview_cbnsxm.png"
                                alt="delete cross"
                                data-value={comment._id}
                                onClick={removeComment}
                              />
                            </div>
                          </>
                        ) : (
                          <>
                            <p className="comment">
                              <Link
                                to={`/userProfile/${comment.userId[0]._id}`}
                                className="link"
                              >
                                <b>{comment.userId[0].username}</b>
                              </Link>{" "}
                              {comment.comment}
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="formDiv">
                <form onSubmit={handleSubmit}>
                  <img
                    className="currentUserPic"
                    src={thisUser.imgUrl}
                    alt="profilePicture"
                  />
                  <input
                    className="input"
                    type="text"
                    name="comment"
                    onChange={handleComment}
                  />
                  {comment ? (
                    <button type="submit" className="buttons">
                      submit
                    </button>
                  ) : (
                    <p className="buttons">submit</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PostPage;
