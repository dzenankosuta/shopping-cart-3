import "./Header.css";
import logo from "../../assets/shopping-logo.svg";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function Header() {
  const { productsInCart } = useContext(AppContext);
  return (
    <header>
      <div className="wrapper">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "navlink-active" : "navlink-not-active"
          }
        >
          <div className="logo">
            <img src={logo} alt="" className="shopping-logo" />
          </div>
        </NavLink>
        <div className="listing">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "navlink-active" : "navlink-not-active"
            }
          >
            <li>Products</li>
          </NavLink>
          <NavLink
            to="/outlet"
            className={({ isActive }) =>
              isActive ? "navlink-active" : "navlink-not-active"
            }
          >
            <li>Outlet</li>
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "navlink-active" : "navlink-not-active"
            }
          >
            <li style={{ position: "relative" }}>
              {productsInCart.length > 0 && (
                <div className="num-in-cart">
                  <p className="num-in-cart-num">{productsInCart.length}</p>
                </div>
              )}
              <FaShoppingCart className="icon" />
            </li>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
