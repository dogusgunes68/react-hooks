import React from "react";
import Product from "./Product";
const Products = React.memo(({ products, addToCart }) => {
  return (
    <>
      <div className="products">
        {products.map((product) => (
          <Product
            key={product.name}
            product={product}
            addToCart={() => addToCart(product)}
          ></Product>
        ))}
      </div>
    </>
  );
});

export default Products;
