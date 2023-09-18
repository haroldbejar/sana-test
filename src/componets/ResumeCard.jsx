import "../css/resumeCardStyle.css";
import { CartContext } from "../contexts/ShoppingCartContext";
import { useContext, useState } from "react";

const Modal = ({ isOpen, onClose, content }) => { 
    if (!isOpen) return null;

    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <ul>
            {content.map((item, index) => (
              <li key={index}>
                {`${item.name} Price: ${item.price} Quantity: (${item.quantity})`}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

function ResumeCard() {
    const {cart} = useContext(CartContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () =>  setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const quantityProducts = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
      }, 0);

      const totalPrice = cart.reduce(
        (acc, curr) => acc + curr.quantity * curr.price,
        0
      );

      const totalFormated = 
        "$" + totalPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    
    return (
        <>
            <div className="container-resume-card">
                <h2 className="title-row">Cart Resume</h2>
                <br/>
                <br/>
                <span className="span-row"><b>Products:</b> ({quantityProducts})</span>
                <span className="span-totals"><b>Total purchase:</b>{totalFormated}</span>
                <button className="btn-row" onClick={openModal}>Confirm Order</button>
                <Modal isOpen={isModalOpen} onClose={closeModal} content={cart}/> 
            </div>
        </>
    );
}
export default ResumeCard