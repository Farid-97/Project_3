import React from 'react'
import { Link } from 'react-router-dom'

function FavouritesSection({user}) {
  return (
    <div> {user.favourites.map((post) =>{
        return(
            <div key={post._id}>
              <Link to={`/post/${post._id}`}>
                <img src={post.imgUrl} alt={post.title}/>
              </Link>
            </div>
        )
    })}</div>
  )
}

export default FavouritesSection