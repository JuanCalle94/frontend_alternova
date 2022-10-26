import React from "react";

import { Header, Footer, Products, ShoppingCart } from "./container";
import "./App.scss";

function App() {
  return (
    <div>
      <Header />
      <main className="main__container">
        <Products />
        <ShoppingCart />
      </main>
      <Footer />
    </div>
  );
}

export default App;
