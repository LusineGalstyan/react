import { memo } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/navbar";
import Logo from '../../img/todo-list.svg';
import "./navbar.css";

function NavBar() {
  return (
    <Navbar bg="light" expand="sm">
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} alt="logo" className='logoImg' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link href="#">Tasks</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default memo(NavBar);
