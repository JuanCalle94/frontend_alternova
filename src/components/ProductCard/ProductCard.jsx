import React from "react";

import defaultImg from "../../assets/defaultimg.png";
import "./ProductCard.scss";

function ProductCard(props) {
  return (
    <>
      <div className="productcard">
        <div className="productcard__img">
          <img src={props.image ? props.image : defaultImg} alt="defaultimg" />
        </div>
        <div className="productcard__info">
          <h3 className="productcard__title">{props.name}</h3>
          <div className="productcard__price__container">
            <div>
              <p className="productcard__price__title">Price:</p>
              <p className="productcard__price__quanty">
                <span className="productcard__price__currency">$</span>
                {props.unit_price}
              </p>
            </div>
            {props.stock > 0 ? (
              <button className="productcard__button__cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            ) : (
              <p className="productcard__button__out">Out of Stock</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
