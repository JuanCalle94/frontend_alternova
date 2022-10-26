import React from "react";

import defaultImg from "../../assets/defaultimg.png";
import "./ProductCard.scss";

function ProductCard(props) {
  return (
    <>
      <div className="productcard">
        <img
          className="productcard__img"
          src={props.image ? props.image : defaultImg}
          alt="defaultimg"
        />
        <div className="productcard__info">
          <h3 className="productcard__tittle">{props.name}</h3>
          <div>
            <p>Stock:</p>
            <p>{props.stock > 0 ? props.stock : "Out of stock"}</p>
          </div>
          <div className="productcard__price__container">
            <div>
              <p className="productcard__price__tittle">Price:</p>
              <p className="productcard__price__quanty">
                <span className="productcard__price__currency">$</span>
                {props.unit_price}
              </p>
            </div>
            {props.stock > 0 ? (
              <button>
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
