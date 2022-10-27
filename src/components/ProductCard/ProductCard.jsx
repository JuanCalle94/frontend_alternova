import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext";
import { motion } from "framer-motion";
import defaultImg from "../../assets/defaultimg.png";
import "./ProductCard.scss";

function ProductCard(props) {

  const {addItemToCart} = useContext(CartContext);

  return (
    <>
      <motion.div className="productcard"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay:0.3, duration: 0.5}}
      >
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
              <button onClick={()=>addItemToCart(props)} type="submit" className="productcard__button__cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            ) : (
              <p className="productcard__button__out">Out of Stock</p>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default ProductCard;
