import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from "react-router-dom";

function Layout() {
  return (
    <Navbar  className="navbar-light bg-light ">
      <Container>
        <Navbar.Brand style={{textAlign:"bold"}}>
        <Link to="/">
            Full Stack Application
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{flexDirection:"row-reverse"}}>
            <Nav.Link >
            <Link className="btn btn-outline-dark" to="/adduser">
            Add User
          </Link>
            </Nav.Link>
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Layout;