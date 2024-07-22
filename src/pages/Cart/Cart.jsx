/* eslint-disable react/jsx-key */
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import CartCard from "../../components/CartCard/CartCard";
import shopPhoto from "../../assets/shop.jpg";
import "./Cart.css";
import { Link } from "react-router-dom";
import { formattedPrice } from "../../utils/formattedPrice";
export default function Cart() {
  const { productsInCart, removeFromCart, decrementProduct, incrementProduct } =
    useContext(AppContext);
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
                onClick={() => removeFromCart(product)}
                quantity={product.quantity}
                decrementProduct={() => decrementProduct(product)}
                incrementProduct={() => incrementProduct(product)}
              />
            );
          })}
          <h1>Total amount: {formattedPrice(totalAmount)}</h1>
        </div>
      )}
    </div>
  );
}
