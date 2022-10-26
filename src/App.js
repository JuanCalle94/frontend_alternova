import React from 'react';

import { Footer , Products , ShoppingCart } from './container';
import { Navbar } from "./components";
import './App.scss';

function App() {
  return (
    <div>
    <Navbar />
    <Products />
    <ShoppingCart />
    <Footer />
    </div>
  )
};

export default App;