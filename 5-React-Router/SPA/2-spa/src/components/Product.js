import React from "react";

const Product = props => {
  return (
    <>
      <div>Produkt</div>
      <article className="product">
        <h1>{props.id}</h1>
      </article>
    </>
  );
};

export default Product;
