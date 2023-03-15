import React, { useState, useEffect } from "react";
import exampleService from "../../services/example.service";
import { Link, useParams, useNavigate } from "react-router-dom";


function PostEdit() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
  
    const handleTitle = (e) => setTitle(e.target.value);
    const handleDescrepition = (e) => setDescription(e.target.value);
  
    const navigate = useNavigate();
    const { id } = useParams();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const body = { title, description };
      try {
         const response = await exampleService.updateOnePost(id,body)
        
        navigate(`/profilePage`);
      } catch (error) {
        console(error);
      }
    };
  
    return (
      <div>
        EdditProject{" "}
        <section>
          <h1>Eddit Project</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleTitle}
            />
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              value={description}
              onChange={handleDescrepition}
            />
            <button type="submit">Submit</button>
          </form>
        </section>
      </div>
    );
}

export default PostEdit