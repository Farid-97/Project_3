import React, {useState, useEffect} from 'react'
import exampleService from '../../services/example.service';
import {Link, useParams, useNavigate} from 'react-router-dom';

function PostPage() {

    const [post, setPost] = useState(null);

    const {id} = useParams();
    const navigate = useNavigate();

    const getPost = async () => {
      try {
        const response = await exampleService.getOnePost(id);
        setPost(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const deletePost = async () => {
        try {
            await exampleService.deletePost(id)
            navigate('/profilePage')
        } catch (error) {
           console.log(error) 
        }
    }

    useEffect(() => {
        getPost();
    }, []);
  
    return (
      <div>
        <h1>Profile page</h1>
              <div key={post._id}>
                  <h2>{post.title}</h2>
                  <h3>{post.description}</h3>
                  <img src={post.imgUrl}/>
                  <button><Link to ={`/editPost/${post._id}`}>Edit Post</Link></button>
                  <button onClick={deletePost}>Delete Post</button>
              </div>
      </div>
    );
}

export default PostPage