import Signup from "../../components/Signup/Signup";
import React from "react";
import Login from "../../components/Login/Login";
import "./HomePage.css";
import Carousel from 'react-bootstrap/Carousel';
import Navbar from "../../components/Navbar/Navbar";

function HomePage({ hiddenS, hiddenL, toggleHiddenL, toggleHiddenS, toggleHiddenH }) {
  return (
    <section>
      <Navbar toggleHiddenS={toggleHiddenS} toggleHiddenH={toggleHiddenH} toggleHiddenL={toggleHiddenL}/>
      {!hiddenS && <Signup toggleHiddenL={toggleHiddenL} />}
      {!hiddenL && <Login />}
      <h1>Ideal</h1>
      <Carousel fade>
      <Carousel.Item>
       
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/df3vc4osi/image/upload/v1679015401/movie-gallery/Captura_2_hvgiin.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 >Discover Ideias</h3>
          <p>Nothing more relaxing than mother nature.Get inspired and driv away in this peaceful creation.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/df3vc4osi/image/upload/v1679015406/movie-gallery/Captura_3_xt8sxs.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Discover Ideias</h3>
          <p>What is fashion? Nobody realy knows for certain, just where what you like.If you are out of any idea, well...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/df3vc4osi/image/upload/v1679016126/movie-gallery/Captura_5_wmyuuv.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Discover Ideias</h3>
          <p>
            The G.O.A.Ts the inspiration for millions of people around the world, here you can search news you ways to get inspired by them.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     
      <div className="explanation">
        <div className="firstDiv">
          <p>
            Inspiration may be hard to come by specialy if you are not a
            creative person. IDEAL is a place where you can be inspired by other
            people inspirations.
          </p>
          <img
            className="firstDivImg1"
            src="https://images.squarespace-cdn.com/content/v1/5dc2bd1ed4ee8f437c3b8047/522bfdfc-391b-47f3-9768-7d5cd01f5ede/Imagination.jpg"
            alt="create"
          />
          <img
            className="firstDivImg2"
            src="https://images.unsplash.com/photo-1627949566743-283bf691cff6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2luYXRpb258ZW58MHx8MHx8&w=1000&q=80"
            alt=""
          />
        </div>
        <div className="secondDiv">
          <div>
            <img
              className="secondDivImg1"
              src="https://res.cloudinary.com/df3vc4osi/image/upload/v1678970801/movie-gallery/spoonful-of-spices-cooking-vwodnnl3zzdsqhbo_vlqlpp.jpg"
              alt="Spoonful of spices"
            />
            <img
              className="secondDivImg2"
              src="https://res.cloudinary.com/df3vc4osi/image/upload/v1678970747/movie-gallery/s-l1600_lvvbjq.jpg"
              alt="Lebron James"
            />
            <img
              className="secondDivImg3"
              src="https://images.daznservices.com/di/library/sporting_news/45/34/nascar-phoenix-051220-getty-ftrjpg_jugcv1cq6unt19ta8g1p0vl27.jpg"
              alt="Nascar"
            />
            <img className="secondDivImg4" src="https://res.cloudinary.com/df3vc4osi/image/upload/v1678978403/movie-gallery/b2e197f10d2f67265dc3b84f11f1c575_zfdcgb.jpg" alt="Ramen" />
          </div>
          <p>
            Find any topic you like such as sports, food, cars and see multitude
            of posts to get ideas from.
          </p>
        </div>
        <div className="thirdDiv">
          <p>
            Browse through Ideal and see a lot of Ideas and save the ones you like.
          
          </p>
          <img
            className="create"
            src="https://res.cloudinary.com/dv1xl09g5/image/upload/v1679019936/Captura_6_w8ipjg.png"
            alt="create"
          />
        </div>
        
      </div>
    </section>
  );
}

export default HomePage;
