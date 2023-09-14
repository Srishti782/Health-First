import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import "./Navbar.css";

function BasicExample() {
  return (
    <div className='nav-div'>
      <Navbar expand="lg">
        <Container className='nav-container'>
          <Navbar.Brand > <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>Healthcare</Link> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='nav-links'>
              <Nav.Link > <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">Home</Link> </Nav.Link>
              <Nav.Link > <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/about">About</Link> </Nav.Link>
              <Nav.Link > <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/contact">Contact</Link> </Nav.Link> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BasicExample;