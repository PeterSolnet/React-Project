import React from 'react';
import './Nav.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Button, } from 'react-bootstrap';
import { Link, Route } from "react-router-dom";
import Login from '../Login/Login.js'
import Signup from '../SignUp/Signup'


function Navigation() {
  return (
    <div>
      <Navbar bg="light" expand="lg" >
        <Navbar.Brand href="#home">Logo Title</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav> */}
          <div className="ml-auto">
            <Link to="/Login"> <Button variant="success">Login</Button> </Link>
            <Link to="/Signup"><Button className="signUp-btn" variant="outline-success">Sign Up</Button></Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
      <Route path="/Signup" component={Signup} />
      <Route path="/Login" component={Login} />
    </div>
  )
}

export default Navigation