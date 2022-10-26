import React from "react";

import { Header, Footer, Products, ShoppingCart } from "./container";
import { Hero } from "./components";
import { CartProvider } from "./context/CartContext";

import "./App.scss";

function App() {
  return (
    <div>
      <CartProvider>
        <Header />
        <Hero />
        <main className="main__container">
          <Products />
          <ShoppingCart />
        </main>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
