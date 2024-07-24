/* eslint-disable react/prop-types */
import "./Modal.css";

export default function Modal({ onConfirm, onCancel }) {
  return (
    <div className="modal-overlay">
      <div className="modal-cart">
        <div className="modal-cart-info">
          <p>Are you sure you want to delete this product from the cart?</p>
        </div>
        <div className="modal-cart-buttoni">
          <button className="btn btn-cancel" onClick={onCancel}>
            No
          </button>
          <button className="btn btn-confirm" onClick={onConfirm}>
            Yes, I&apos;m sure
          </button>
        </div>
      </div>
    </div>
  );
}
