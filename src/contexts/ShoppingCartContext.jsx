import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState([]);
  const [currPage, setCurrPage] = useState(1);

  const contextValues = {
    cart, 
    setCart,
    product,
    setProduct,
    currPage,
    setCurrPage
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};