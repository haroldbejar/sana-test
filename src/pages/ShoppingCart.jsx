import { NavLink } from "react-router-dom";
import RowCard from "../componets/RowCard";
import ResumeCard from "../componets/ResumeCard";
import "../css/shoppingCartStyle.css";

const ShoppingCart = () => {
    return (
        <>
            <div className="navbar">
                <NavLink className="link" to={"/"}>Home</NavLink>
            </div>
            <div className="content-shopping">
                {/*render RowCard*/}
                <RowCard/>
            </div>
            <div className="shopping-resumen">
                {/*render resume*/}
                <ResumeCard/>
            </div>
        </>
       
    );
}

export default ShoppingCart;