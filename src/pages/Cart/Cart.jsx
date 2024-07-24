/* eslint-disable react/jsx-key */
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import CartCard from "../../components/CartCard/CartCard";
import shopPhoto from "../../assets/shop.jpg";
import "./Cart.css";
import { Link } from "react-router-dom";
import { formattedPrice } from "../../utils/formattedPrice";
import Modal from "../../components/Modal/Modal";
import { notifications } from "@mantine/notifications";

export default function Cart() {
  const { productsInCart, removeFromCart, decrementProduct, incrementProduct } =
    useContext(AppContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productToRemove, setProductToRemove] = useState(null);

  const totalAmount = productsInCart.reduce((acc, curr) => {
    let newPrice;
    if (curr.discountedPrice) {
      const strPrice = curr.discountedPrice;
      newPrice = +strPrice.replace(".", "").replace(",", ".") * curr.quantity;
    } else {
      const strPrice = curr.current_price;
      newPrice = +strPrice.replace(".", "").replace(",", ".") * curr.quantity;
    }
    return acc + newPrice;
  }, 0);

  const handleRemoveClick = (product) => {
    setProductToRemove(product);
    setIsModalOpen(true);
  };

  const handleConfirmRemove = () => {
    if (productToRemove) {
      removeFromCart(productToRemove);
      notifications.show({
        title: "You successfully removed product from cart!",
        message: "",
        color: "red",
      });
    }
    setIsModalOpen(false);
    setProductToRemove(null);
  };

  const handleCancelRemove = () => {
    setIsModalOpen(false);
    setProductToRemove(null);
  };

  return (
    <div className="wrapper-page">
      {productsInCart.length < 1 ? (
        <div className="error">
          <img className="error-img" src={shopPhoto} />
          <h2>No items in cart</h2>
          <p>
            Start browsing <Link to="/products">products</Link>
          </p>
        </div>
      ) : (
        <div className="wrapper-cart">
          <h1>My Cart</h1>
          {productsInCart.map((product) => {
            return (
              <CartCard
                key={product.id}
                image={product.image_url}
                title={product.title}
                stock={product.stock}
                price={
                  product.discountedPrice
                    ? product.discountedPrice
                    : product.current_price
                }
                description={product.short_description}
                onClick={() => handleRemoveClick(product)}
                quantity={product.quantity}
                decrementProduct={() => decrementProduct(product)}
                incrementProduct={() => incrementProduct(product)}
              />
            );
          })}
          <h1>Total amount: {formattedPrice(totalAmount)}</h1>
        </div>
      )}
      {isModalOpen && (
        <Modal onConfirm={handleConfirmRemove} onCancel={handleCancelRemove} />
      )}
    </div>
  );
}
