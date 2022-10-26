import React from 'react';

import data from '../../data/products.json';
import { ProductCard } from "../../components";
import './Products.scss';

function Products() {

  return (
    <>
      <h1>Alternova Shop</h1>
      <h2>Productos</h2>
      <div className="products">
          {data.products.map((product,index) => {
            return <ProductCard {...product} key={index} />;
          })}
      </div>
    </>
  );
}

export default Products;