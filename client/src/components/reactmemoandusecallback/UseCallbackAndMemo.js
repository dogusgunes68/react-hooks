import { useCallback, useState } from "react";
import Cart from "./Cart";
import Products from "./Products";
import "./style.css";

const phones = [
  { name: "iPhone 12", price: 14000 },
  { name: "Galaxy S20", price: 6500 },
  { name: "Huawei P40", price: 10000 },
];

const UseCallBackAndMemo = () => {
  const [products, setProducts] = useState(phones);
  const [cart, setCart] = useState([]);

  const addToCart = useCallback((product) => {
    setCart((cart) => [...cart, product]);
  });

  const emptyCart = useCallback(() => {
    setCart([]);
  });

  return (
    <div className="wrapper">
      <Products products={products} addToCart={addToCart}></Products>
      <Cart cart={cart} emptyCart={emptyCart}></Cart>
    </div>
  );
};

export default UseCallBackAndMemo;
