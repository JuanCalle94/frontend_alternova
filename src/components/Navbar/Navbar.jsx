import React from 'react';

import logo from '../../assets/logo-Alternova.png'
import './Navbar.scss';

function Navbar() {
  return (
    <>
      <img className='logo' src={logo} alt="logo-Alternova" />
    </>
  );
}

export default Navbar;