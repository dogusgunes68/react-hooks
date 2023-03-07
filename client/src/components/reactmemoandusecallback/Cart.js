import Product from "./Product";
import React from "react";

const Cart = ({ cart, emptyCart }) => {
  return (
    <>
      <div className="products">
        <h1>
          Your Cart <button onClick={emptyCart}>Empty Cart</button>
        </h1>
        {cart.map((item, index) => (
          <Product key={index} product={item}></Product>
        ))}
      </div>
    </>
  );
};

export default Cart;
