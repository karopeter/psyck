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

const Navbar = ({ toggle }) => {
    return (
    <Nav>
    <NavContainer>
      <Header>A-PSYCK</Header>
      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>
      <NavMenu>
          <NavLinks to='about'>Trade</NavLinks>
          <NavLinks to='market'>Market</NavLinks>
          <NavLinks to='about'>About us</NavLinks>
      </NavMenu>
    </NavContainer>
    </Nav>
    );
};

export default Navbar;