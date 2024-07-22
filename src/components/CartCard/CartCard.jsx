/* eslint-disable react/prop-types */
import { formattedPrice } from "../../utils/formattedPrice";
import "./CartCard.css";
export default function CartCard({
  image,
  title,
  description,
  stock,
  price,
  onClick,
  quantity,
  decrementProduct,
  incrementProduct,
}) {
  const strPrice = price;
  const numPrice = +strPrice.replace(".", "").replace(",", ".");
  const totalPrice = numPrice * quantity;
  return (
    <div className="product-cart">
      <img className="product-image" src={image} />
      <div className="product-info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="quantity">
        <p>Quantity: {quantity}</p>
        <button onClick={incrementProduct} disabled={stock === 0}>
          +
        </button>
        <button onClick={decrementProduct} disabled={quantity === 1}>
          -
        </button>
      </div>
      <div className="product-price">
        <h2>{formattedPrice(totalPrice)}</h2>
        <p>In stock: {stock}</p>
      </div>
      <button onClick={onClick} className="remove-button">
        Remove from cart
      </button>
    </div>
  );
}
