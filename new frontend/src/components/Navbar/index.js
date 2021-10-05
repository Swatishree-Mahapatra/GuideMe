import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>Sustain Market</NavLink>
        <NavIcon onClick={toggle}>
          <p>Navigation</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
