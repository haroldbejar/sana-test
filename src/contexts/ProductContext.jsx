import { createContext } from "react";

const ProductContext = createContext({
    products: [],
    totalProducts: [], 
    addToCart: 0,
    currentPage: 1,
    setTotalProducts: () => {},
    setAddToCart: () => {},
    setCurrentPageContext: () => {},
    setProducts: () => {}
});

export default ProductContext;