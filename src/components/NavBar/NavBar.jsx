import { memo } from "react";
import {Nav, Navbar, Container} from "react-bootstrap/";
import {NavLink} from "react-router-dom";
import styles from './navbar.module.css';
import Logo from '../../img/todo-list.svg';
import {useSelector} from 'react-redux';


const activeLinkClassName = ({isActive}) =>{
  const classes = ['nav-link'];

  if(isActive){
    classes.push(styles.active);
  }
 return classes.join(' ');
};

function NavBar() {
  const count = useSelector(state=>state.count.taskCount)

  return (
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand > 
          <NavLink to="/" > 
            <img src={Logo} alt="logo" className={styles.logoImg} />
          </NavLink> 
        </Navbar.Brand>
        <div className={styles.relative}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className={styles.navbarCollapse}>
            <Nav className="me-auto">
              <NavLink to="/" className={activeLinkClassName}>Home</NavLink>
              <NavLink to="/about" className={activeLinkClassName}>About</NavLink>
              <NavLink to="/contact" className={activeLinkClassName}>Contact us</NavLink>
              
            </Nav>
          </Navbar.Collapse>
        </div>
        <h1>Conut: {count}</h1>
      </Container>
    </Navbar>

    
  );
}

export default memo(NavBar);
