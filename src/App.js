import React from 'react';

import { Header, Footer , Products , ShoppingCart } from './container';
import './App.scss';

function App() {
  return (
    <div>
    <Header />
    <Products />
    <ShoppingCart />
    <Footer />
    </div>
  )
};

export default App;