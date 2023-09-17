import { useState, useContext } from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routesNames";
import ProductContext from "../contexts/ProductContext";

const MainContent = () => {

  const { products, setTotalProducts } = useContext(ProductContext);
  const [stateProducts, setStateProducts] = useState([]);
  const navigate = useNavigate();

  const listProducts = [];

  const sendToBuy = () => {
   navigate(routes.shoppingCart, { state: {list: stateProducts}});
  }
  
  const addProductsToCart = (objProct, inCart) => {
     listProducts.push(objProct);
     setStateProducts(listProducts);
     setTotalProducts(listProducts);
     console.log(inCart);
  }

  const size = 5;
  const productGroups = [];

  /* Limit to 5 render in a row*/
  for (let i = 0; i < products.length; i += size) {
    productGroups.push(products.slice(i, i + size));
  }

  return (
    <div>
      {productGroups.map((productGroup, rowIndex) => (
        <div className="main-content" key={rowIndex}>
          {productGroup.map((product, productIndex) => (
            <Card
            key={productIndex}
            productId={product.productId}
            title={product.code}
            name={product.name}
            description={product.description}
            price={product.price}
            existence={product.quantity}
            urlImage={product.urlImage ?? null}
            callBack={addProductsToCart}
            sendToBuy={sendToBuy}
        />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MainContent;
