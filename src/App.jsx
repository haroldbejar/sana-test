import { BrowserRouter as Router } from 'react-router-dom';
import RoutesApp from './routes/RoutesApp';
import ProductContext from './contexts/ProductContext';
import { useState } from 'react';

function App() {
  const [totalProducts, setTotalProducts] = useState([]);
  const [addToCart, setAddToCart] = useState(0);
  const [currentPage, setCurrentPageContext] = useState(1);
  const [products, setProducts] = useState([]);
  
  return (
    <>
    <ProductContext.Provider value={{
      products,
      totalProducts,
      addToCart, 
      currentPage,
      setProducts,
      setTotalProducts,
      setAddToCart,
      setCurrentPageContext
      }}>
      <Router>
        <RoutesApp/>
      </Router>
    </ProductContext.Provider>
    </>
  )
}

export default App
