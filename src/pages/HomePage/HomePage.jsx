import Signup from "../../components/Signup/Signup";
import React, { useState } from "react"
import Login from "../../components/Login/Login";
import "./HomePage.css";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";




 function HomePage({hiddenS,hiddenL}) {
 

  
  return (
    
     <section>
      
    {!hiddenS && <Signup/>}
      {!hiddenL && <Login/>}
      <h1>Flickity - is-selected class</h1>


<div class="carousel" data-flickity>
  <div class="carousel-cell"></div>
  <div class="carousel-cell"></div>
  <div class="carousel-cell"></div>
  <div class="carousel-cell"></div>
  <div class="carousel-cell"></div>
  <div class="carousel-cell"></div>
  <div class="carousel-cell"></div>
</div>

<div class="container">
  <div class="box">
    <div class="imgBx">
      <img src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_41/3044956/191009-cooking-vegetables-al-1422.jpg"/>
    </div>
    <div class="content">
      <div>
        <h2>Cook</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
        </p>
      </div>
    </div>
  </div>
  <div class="box">
    <div class="imgBx">
      <img src="https://images.unsplash.com/photo-1579639782539-15cc6c0be63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>
    </div>
    <div class="content">
      <div>
        <h2>Image Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
        </p>
      </div>
    </div>
  </div>
  <div class="box">
    <div class="imgBx">
      <img src="https://images.unsplash.com/photo-1603984362497-0a878f607b92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"/>
    </div>
    <div class="content">
      <div>
        <h2>Image Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
        </p>
      </div>
    </div>
  </div>
  <div class="box">
    <div class="imgBx">
      <img src="https://images.unsplash.com/photo-1579310962131-aa21f240d986?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"/>
    </div>
    <div class="content">
      <div>
        <h2>Image Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
        </p>
      </div>
    </div>
  </div>
</div>
  
     </section>
  
  )
}

export default HomePage