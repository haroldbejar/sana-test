import PropTypes from "prop-types";
import { useContext } from "react";
import * as FaIcons from "react-icons/fa";
import "../css/cardStyle.css";
import { CartContext } from "../contexts/ShoppingCartContext";


const Card = ({
    code,
    name,
    description,
    price,
    quantity: existence,
    urlImage,
    productId,
}) => {

    const {cart, setCart} = useContext(CartContext);

    const addProductToCart = () => {
        setCart((currentProducts) => {
            const isProductsFound = currentProducts.find((item) => item.productId === productId);
            if (isProductsFound) {
                return currentProducts.map((item) => {
                    if (item.productId === productId) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            } else {
                return [...currentProducts, { productId, quantity: 1, price, urlImage, name }];
            }
        });
    };

    const removeProduct = (productId) => {
        setCart((currentProducts) => {
            if (currentProducts.find((item) => item.productId === productId)?.quantity === 1) {
                return currentProducts.filter((item) => item.productId !== productId);
            } else {
                return currentProducts.map((item) => {
                    if (item.productId === productId) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    const getQuantityById = (productId) => {
        return cart.find((item) => item.productId === productId)?.quantity || 0;
    };

    const quantityPerProduct = getQuantityById(productId);

    const productTitle = `${code} ${name} - Stock (${existence})`;

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
                {quantityPerProduct === 0 ? (
                    <div>
                        <FaIcons.FaCartPlus
                            className="btn-card"
                            onClick={() => addProductToCart()}
                        />
                    </div>
                ) : (
                    <div>
                        <FaIcons.FaArrowUp
                            className="arrow"
                            onClick={() => addProductToCart()}
                        />
                    </div>
                )}
                {quantityPerProduct > 0 && (
                    <div>
                        <span className="quantity-card">Qty {quantityPerProduct}</span>
                    </div>
                )}

                {quantityPerProduct > 0 && (
                    <div>
                    <FaIcons.FaArrowDown
                        className="arrow"
                        onClick={() => removeProduct(productId)}
                    />
                </div>
                )}
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
}

export default Card;
