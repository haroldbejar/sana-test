import { useState, useContext } from "react";
import { FaCartArrowDown } from "react-icons/fa"; 
import PropTypes from "prop-types";
import routes from "../constants/routesNames";
import { CartContext } from "../contexts/ShoppingCartContext";
import { Link } from "react-router-dom";

const navStyles = {
  color: "#fff",
  listStyle: "none",
  textDecoration: "none",
};

const Navbar = ({callBackSearchItem}) => {

  const {cart} = useContext(CartContext);
  const [search, setSearch] = useState('');

  const quantityStored = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  

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
        <Link to={routes.shoppingCart} style={navStyles}>
          <FaCartArrowDown className="icon-cart"/>
        </Link>
        
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
