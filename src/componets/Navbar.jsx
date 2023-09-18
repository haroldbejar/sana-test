import { useState, useContext } from "react";
import { FaCartArrowDown } from "react-icons/fa"; 
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routesNames";
import { CartContext } from "../contexts/ShoppingCartContext";

const Navbar = ({callBackSearchItem}) => {

  const {cart} = useContext(CartContext);
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const quantityStored = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const handleClickCart = () => {
    navigate(routes.shoppingCart);
  }

  const handleSearchChange = (event) => {
    const {value} = event.target;
    setSearch(value);
  }

  const handleClickCallBack = () => {
    callBackSearchItem(search);
  }

  return (
    <nav className="navbar">
      <div className="brand">SanaTest</div>
      <div className="search">
        <input 
          placeholder=" Search items..." 
          value={search}
          className="txtSearch"
          onChange={(event) => handleSearchChange(event)}
        />
        <button 
          className="btnSearch" 
          onClick={handleClickCallBack}
        >
          Search
        </button>
      </div>
      <div className="cart">
        <FaCartArrowDown 
          className="icon-cart"
          onClick={handleClickCart}
        />
        <sup>{quantityStored}</sup>
      </div>
      <div className="usersession">User Session</div>
    </nav>
  );
};

Navbar.propTypes = {
  callBackSearchItem: PropTypes.func
}

export default Navbar;
