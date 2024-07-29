import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Outlet from "./pages/Outlet/Outlet";
import Cart from "./pages/Cart/Cart";
import "@mantine/notifications/styles.css";
import "@mantine/core/styles.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
function App() {
  const { setProductsInCart } = useContext(AppContext);
  useEffect(() => {
    const localProductsInCart = JSON.parse(
      localStorage.getItem("productsInCart")
    );
    if (localProductsInCart) {
      setProductsInCart(localProductsInCart);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Header />
      <main className="main-app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/outlet" element={<Outlet />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
