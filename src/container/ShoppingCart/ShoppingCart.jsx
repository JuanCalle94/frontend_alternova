import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ProductCart from "../../components/ProductCart/ProductCart";
import { saveAs } from "file-saver";

import "./ShoppingCart.scss";

function ShoppingCart() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const total = cartItems.reduce(
    (previous, current) => previous + current.amount * current.unit_price,
    0
  );

  const checkout = (event) => {
    event.preventDefault();

    /*     const cartJson = JSON.stringify(cartItems);
    const blob = new Blob ([cartJson], {type: "text/plain;charset=utf-8"})
    saveAs (blob , "prueba.json");
 */
    localStorage.clear();
    setCartItems([]);
  };

  return (
    <>
      <section className="cart">
        <h2 className="title__h2">ShoppingCart</h2>
        <div className="cart__order">
          {cartItems.length === 0 ? (
            <p className="cart__order__empty">Your cart is empty</p>
          ) : (
            <div className="cart__order__products">
              {cartItems.map((item, index) => {
                return <ProductCart {...item} key={index} />;
              })}
            </div>
          )}
          <h2>
            Total: <span className="currency"> $</span>
            {total}
          </h2>
        </div>
        <button className="cart__checkout" type="button" onClick={checkout}>
          <p className="cart__checkout__text">Checkout</p>
        </button>
      </section>
    </>
  );
}

export default ShoppingCart;
