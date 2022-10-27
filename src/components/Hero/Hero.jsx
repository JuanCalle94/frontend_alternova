import React from "react";
import "./Hero.scss";
import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      <div className="hero">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to <br />
          Alternova <span className="hero__shop">Shop</span>
        </motion.h1>
        <motion.div className="hero__line"
          initial={{ opacity: 0, x: -200}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.5 }}
        >
        </motion.div>
      </div>
    </>
  );
}

export default Hero;
