import PropTypes from "prop-types";
import { useContext, useState } from "react";
import * as FaIcons from "react-icons/fa";
import "../css/cardStyle.css";
import ProductContext from "../contexts/ProductContext";

const Card = ({
    title,
    name,
    description,
    price,
    existence,
    urlImage,
    productId,
    callBack
}) => {
    const { setAddToCart } = useContext(ProductContext);
    const [quantity, setQuantity] = useState(0);
    const [productsInCart, setProductsInCart] = useState(1);
    const [isActive, setIsActive] = useState(false);
    

    
    const addProductToCart = (idProduct) => {
        setProductsInCart(productsInCart + 1);
        setAddToCart(productsInCart);
        setIsActive(true);

        const objProduct = {
            productId: idProduct,
            productQuantity: quantity
        }
        callBack(objProduct, productsInCart);
    }

    const handleQuantityUp = () => {
        if (quantity >= existence) return;
        setQuantity(quantity + 1);
        setAddToCart(productsInCart);
        setProductsInCart(productsInCart + 1);
        setIsActive(true);
    }

    const handleQuantityDown = () => {
        if (quantity == 0) return;
        setQuantity(quantity - 1);
        setProductsInCart(productsInCart - 1);
        setAddToCart(productsInCart - 1);

    }

    const productTitle = `${title} ${name} - Stock (${existence})`;

    return (
        <div className="FlexContainer">
            <div className="image-container">
                <img
                    src={urlImage}
                    alt="Image"
                    width="30"
                    height={60}
                    className="image-card"
                />
            </div>
            <div className="title-card">
                <h2 className="title-card">{productTitle}</h2>
            </div>
            <div className="descript-card">
                <p className="descript-card">{description}</p>
            </div>
            <div className="price-card">
                <span className="price-card">${price}</span>
            </div>
            <div className="actions-card">
                <div>
                    <FaIcons.FaCartPlus
                        className={!isActive ? 'visible btn-card' : 'hide'}
                        onClick={() => addProductToCart(productId)}
                    />
                </div>
                <div className={isActive ? 'visible' : 'hide'}>
                    <FaIcons.FaArrowUp
                        className="arrow"
                        onClick={handleQuantityUp}
                    />
                </div>
                <div className={isActive ? 'visible' : 'hide'}>
                    <span className="quantity-card">Qty {quantity}</span>
                </div>

                <div className={isActive ? 'visible' : 'hide'}>
                    <FaIcons.FaArrowDown
                        className="arrow"
                        onClick={handleQuantityDown}
                    />
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    productId: PropTypes.number,
    title: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    existence: PropTypes.number,
    urlImage: PropTypes.string,
    callBack: PropTypes.func,
    sendToBuy: PropTypes.func
}

export default Card;
