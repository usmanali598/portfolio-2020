import React, { useState, useEffect } from 'react';
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import '../index.css';

const Navbur = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar dark style={{textDecoration: 'none', backgroundColor:'#212121', paddingLeft:'35px'}} expand="md">
          <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="#home" >HOME</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#tehtava" >WHAT I DO</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#conten" >PORTFOLIO</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#footer">CONTACT</NavLink>
              </NavItem>
    
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

export default Navbur;