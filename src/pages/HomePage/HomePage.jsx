import Signup from "../../components/Signup/Signup";
import React from "react";
import Login from "../../components/Login/Login";
import "./HomePage.css";

function HomePage({ hiddenS, hiddenL, toggleHiddenL }) {
  return (
    <section>
      {!hiddenS && <Signup toggleHiddenL={toggleHiddenL} />}
      {!hiddenL && <Login />}
      <h1>Ideal</h1>

      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="https://media.npr.org/assets/img/2022/06/15/gettyimages-1329369484_custom-885a687ec4ed7acfd56a918dbc51f9204cebcf8b-s1100-c50.jpg"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://daily.jstor.org/wp-content/uploads/2020/06/why_you_should_learn_the_names_of_trees_1050x700.jpg"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://www.gardeningknowhow.com/wp-content/uploads/2017/07/hardwood-tree.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div className="explanation">
        <div className="firstDiv">
          <p>
            Inspiration may be hard to come by specialy if you are not a
            creative person. IDEAL is a place where you can be inspired by other
            people inspirations.
          </p>
          <img
            className="firstDivImg1"
            src="https://images.theconversation.com/files/183880/original/file-20170829-5012-mu9wnk.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
            alt="create"
          />
          <img
            className="firstDivImg2"
            src="https://www.success.com/wp-content/uploads/2016/07/waystotapintoyourcreativeself.jpg"
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
            Inspiratiopn may be hard to come by specialy if you are not a
            creative person.Ideal is a place where you can be inspired by other
            people inspirations.
          </p>
          <img
            className="create"
            src="https://images.theconversation.com/files/183880/original/file-20170829-5012-mu9wnk.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
            alt="create"
          />
        </div>
        {/* <div className="explanation2">
          <img
            className="create2"
            src="https://treenewal.com/wp-content/uploads/2020/11/oak-tree-care.png"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            repellat, numquam voluptatum, possimus nemo excepturi eius est nihil
            asperiores fuga nostrum? Debitis quo magni blanditiis quos
            consectetur reiciendis minima sequi?
          </p>
        </div> */}
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
        crossorigin
      ></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        crossorigin
      ></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin
      ></script>

      <script>var Alert = ReactBootstrap.Alert;</script>
    </section>
  );
}

export default HomePage;
