import React from "react";

const Product = React.memo(({ product, addToCart }) => {
  return (
    <div className="product">
      <h2>{product.name}</h2>
      <h3>Price:{product.price.toLocaleString()} $</h3>
      {addToCart && (
        <button onClick={() => addToCart(product)}>Add To Cart</button>
      )}
    </div>
  );
});

export default Product;
