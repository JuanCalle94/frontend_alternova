import React from "react";

import defaultImg from "../../assets/defaultimg.png";
import "./ProductCart.scss";

function ProductCart(props) {
  return (
    <>
      <div className="productcart">
        <div className="productcart__img">
          <img src={props.image ? props.image : defaultImg} alt="defaultimg" />
        </div>
        <div className="productcart__info">
          <p className="productcart__title">{props.name}</p>
          <div className="productcart__price">
            <div>
              <p className="productcart__price__title">Price:</p>
              <p className="productcart__price__quanty">
                <span className="productcart__price__currency">$</span>
                {props.unit_price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCart;
