import { memo } from "react";
import {Nav, Container} from 'react-bootstrap/';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../img/todo-list.svg';
import {NavLink} from "react-router-dom";
import styles from './navbar.module.css';
import {useSelector} from 'react-redux';

const activeLinkClassName = ({isActive}) =>{
  const classes = [styles.navLink];
  if(isActive){
    classes.push(styles.active);
  }
 return classes.join(' ');
};
function NavBar() {
const count  = useSelector((store)=>store.counter.value);

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
	<h1>Conut: {count}</h1>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default memo(NavBar);
