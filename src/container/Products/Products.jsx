import React from "react";

import data from "../../data/products.json";
import { ProductCard } from "../../components";
import "./Products.scss";

function Products() {
  return (
    <>
      <section className="products">
        <h2>Products</h2>
        <div className="products__container">
          {data.products.map((product, index) => {
            return <ProductCard {...product} key={index} />;
          })}
        </div>
      </section>
    </>
  );
}

export default Products;
