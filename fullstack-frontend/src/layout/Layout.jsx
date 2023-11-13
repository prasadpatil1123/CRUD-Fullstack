import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Layout() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand>
          <Link to="/">Full stack Application</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ marginLeft: "20px" }}>
            
            <Link to="/Home" style={{ marginRight: "10px" }}>
              Home
            </Link>
            
          </Nav>
        </Navbar.Collapse>

        <Link className="btn btn-outline-light " style={{color:"blue", outlineColor:"blue",outlineStyle:"solid" }} to="/adduser">
          Add User
        </Link>
      </Container>
    </Navbar>
  );
}

export default Layout;
