import { useContext } from "react";
import Card from "./Card";
import { CartContext } from "../contexts/ShoppingCartContext";

const MainContent = () => {

  const { product } = useContext(CartContext);
  const size = 5;
  const productGroups = [];

  /* Limit to 5 render in a row*/
  for (let i = 0; i < product.length; i += size) {
    productGroups.push(product.slice(i, i + size));
  }

  return (
    <div>
      {productGroups.map((productGroup, rowIndex) => (
        <div className="main-content" key={rowIndex}>
          {productGroup.map((product, productIndex) => (
            <Card key={productIndex} {...product}/>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MainContent;
