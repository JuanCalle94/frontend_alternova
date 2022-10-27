import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext"
import defaultImg from "../../assets/defaultimg.png";
import { motion } from "framer-motion";
import "./ProductCart.scss";

function ProductCart(props) {

  const { deleteItemInCart, addItemToCart } = useContext(CartContext);

  return (
    <>
      <motion.div className="productcart"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
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
            <button className="productcart__buttons" onClick={()=> deleteItemInCart(props)}>-</button>
            <p>{props.amount}</p>
            <button className={props.amount >= props.stock ? 'productcart__buttons  out__stock' : 'productcart__buttons'} onClick={()=> addItemToCart(props)}>+</button>
          </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default ProductCart;
