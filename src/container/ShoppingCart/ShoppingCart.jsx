import React from 'react';

import './ShoppingCart.scss';

function ShoppingCart() {
  return (
    <>
    <section className='cart'>
      <h2 className='title__h2'>ShoppingCart</h2>
      <div className="cart__order">
            <h3>Mi orden</h3>
            <h2>Total: $</h2>
        </div>
    </section>
    </>
  );
}

export default ShoppingCart;