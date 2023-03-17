import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar({ toggleHiddenS, toggleHiddenL, toggleHiddenH, searchPost }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
        <Nav.Link onClick={toggleHiddenH}> <img className="idealIcon" src="https://res.cloudinary.com/df3vc4osi/image/upload/v1679010951/movie-gallery/d955ceda-030c-4194-b564-1af23b6df3e6_fkf5g7.jpg" alt="Ideal Icon" /></Nav.Link> 
          <Link to="/">
            <Navbar.Brand onClick={toggleHiddenH}>Home</Navbar.Brand>
          </Link>
          <Link>
            <Navbar.Brand onClick={toggleHiddenS}>Signup</Navbar.Brand>
          </Link>
          <Link>
            <Navbar.Brand onClick={toggleHiddenL}>Login</Navbar.Brand>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
