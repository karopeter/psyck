import React from 'react';
import { FaBars } from 'react-icons/fa';
import { 
    Nav, 
    NavContainer, 
    Header, 
    MobileIcon, 
    NavMenu,  
    NavLinks 
  } from './NavbarElements';

const Navbar = () => {
    return (
    <Nav>
    <NavContainer>
      <Header>A-PSYCK</Header>
      <MobileIcon>
        <FaBars />
      </MobileIcon>
      <NavMenu>
          <NavLinks>Trade</NavLinks>
          <NavLinks>Market</NavLinks>
          <NavLinks>About us</NavLinks>
      </NavMenu>
    </NavContainer>
    </Nav>
    );
};

export default Navbar;