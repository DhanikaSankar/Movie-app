import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";
import { UserContext } from "./UserProvider";

function Home() {
 
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container className="">
          <Navbar.Brand style={{color:"white"}}>Movie-App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="">
              <Nav.Link><Link to={"/"} className="nav" >Popular Movies</Link></Nav.Link>
              <Nav.Link><Link to={"/Latest"} className="nav">Latest Movies</Link></Nav.Link>
              <Nav.Link><Link to={"/Comedy"} className="nav">Comedy Movies</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Home;
