import React from 'react';

import { Navbar } from "../../components";
import './Header.scss';

function Header() {
  return (
    <>
    <header>
      <div className='header__container'>
        <Navbar />
      </div>
    </header>
    </>
  );
}

export default Header;