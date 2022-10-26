import React from 'react';
import './Hero.scss';

function Hero() {
  return (
    <>
        <div className="hero">
          <h1>
            Welcome to <br />
            Alternova <span className='hero__shop'>Shop</span>
          </h1>
          <div className='hero__line'></div>
        </div>
    </>
  );
}

export default Hero;