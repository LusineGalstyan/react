import { memo } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import Logo from '../../img/todo-list.svg';

import {NavLink} from "react-router-dom";
import styles from './navbar.module.css';

const activeLinkClassName = ({isActive}) =>{
  const classes = [styles.navLink];
  if(isActive){
    classes.push(styles.active);
  }
 return classes.join(' ');
};
function NavBar() {
  return (
    <Navbar bg="light" expand="sm">
      <Container>
        <Navbar.Brand > <NavLink to="/" > 
          <img src={Logo} alt="logo" className={styles.logoImg} />
          </NavLink> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2">
            <Nav.Link href="/about"  className={activeLinkClassName}>About</Nav.Link>
            <Nav.Link href="/contact" className={activeLinkClassName}>Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default memo(NavBar);
