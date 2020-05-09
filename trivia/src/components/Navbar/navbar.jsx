import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './navbar.css'

export class NavBar extends React.Component {
  render() {
    return (
      <>
        <Navbar className="nav">
          <Navbar.Brand href="#home">Yo soy Betty, La Fea</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">¿Cómo jugar?</Nav.Link>
            <Nav.Link href="#features">Categorías</Nav.Link>
  
          </Nav>
          <Form inline>
          <Nav.Link href="#pricing">Iniciar sesión</Nav.Link>
          </Form>
        </Navbar>
      </>
    )
  }

}

export default NavBar;