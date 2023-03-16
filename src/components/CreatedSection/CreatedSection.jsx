import React from 'react'
import { Link } from 'react-router-dom'
import "./CreatedSection.css"


function CreatedSection({user}) {
  return (
    <div className='image'> {user.post.map((post) =>{
        return(
            <div key={post._id} className="idPic">
              <Link to={`/post/${post._id}`}>
                <img className='postspic' src={post.imgUrl} alt={post.title}/>
              </Link>
            </div>
        )
    })}</div>
  )
}

export default CreatedSection