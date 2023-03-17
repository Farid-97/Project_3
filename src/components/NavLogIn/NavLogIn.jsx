import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './NavLogIn.css'

function NavLogIn({ toggleHiddenH }) {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const refreshPage = () => {
    navigate("/feed");
    window.location.reload(false);
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
            <Nav.Link onClick={refreshPage}> <img className="idealIcon" src="https://res.cloudinary.com/df3vc4osi/image/upload/v1679010951/movie-gallery/d955ceda-030c-4194-b564-1af23b6df3e6_fkf5g7.jpg" alt="Ideal Icon" /></Nav.Link>  
              <Link to="/addPost"><Navbar.Brand>Create a Post</Navbar.Brand></Link>
              {/* <Search searchPost={searchPost} /> */}
             <Nav.Link>
             <Link to="/profilePage">
             <Navbar.Brand>Profile</Navbar.Brand>
              </Link>
                </Nav.Link> 
                <Nav.Link> 
               
                <Link  onClick={(event) => {
                  logOutUser();
                  toggleHiddenH();
                }}>  <Navbar.Brand>Logout</Navbar.Brand> </Link>
          
            </Nav.Link>
                
                   
        </Container>
      </Navbar>
    </div>
  );
}

export default NavLogIn;
