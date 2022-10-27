import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext"
import defaultImg from "../../assets/defaultimg.png";
import "./ProductCart.scss";

function ProductCart(props) {

  const { deleteItemInCart, addItemToCart } = useContext(CartContext);

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
                {props.amount * props.unit_price}
              </p>
            </div>
            <div className="productcart__buttons__container">
            <button className="productcart__buttons" onClick={()=> addItemToCart(props)}>+</button>
            <p>{props.amount}</p>
            <button className="productcart__buttons" onClick={()=> deleteItemInCart(props)}>-</button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCart;
