import {Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ShoppingCart from "../pages/ShoppingCart";
import Orders from "../pages/Orders";
import Admon from "../pages/Admon";

function RoutesApp() {
    return (
            <Routes>
                <Route path="/" exact element={ <Home/> } />
                <Route path="shopping" element={<ShoppingCart/> }/>
                <Route path="orders" element={<Orders/> }/>
                <Route path="admon" element={<Admon/>}/>
            </Routes>
    );
}

export default RoutesApp;