import React from "react";

import { Header, Footer, Products, ShoppingCart } from "./container";
import { Hero } from "./components";
import "./App.scss";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <main className="main__container">
        <Products />
        <ShoppingCart />
      </main>
      <Footer />
    </div>
  );
}

export default App;
