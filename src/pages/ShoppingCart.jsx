import { NavLink } from "react-router-dom";
import RowCard from "../componets/RowCard";
import ResumeCard from "../componets/ResumeCard";
import "../css/shoppingCartStyle.css";
import { CartContext } from "../contexts/ShoppingCartContext";
import { useContext } from "react";

const ShoppingCart = () => {
    const {cart} = useContext(CartContext);

    return (
        <>
            <div className="navbar">
                <NavLink className="link" to={"/"}>Home</NavLink>
            </div>
            <div className="content-shopping">
                {cart.map((product) => (
                    <RowCard key={product.productId} {...product}/>
                ))}
                
            </div>
            <div className="shopping-resumen">
                <ResumeCard />
            </div>
        </>
       
    );
}

export default ShoppingCart;