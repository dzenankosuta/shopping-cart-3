/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const AppContext = createContext();

function ContextProvider({ children }) {
  const [productsInCart, setProductsInCart] = useState([]);
  const addToCart = (product) => {
    setProductsInCart((prevProducts) => [
      ...prevProducts,
      { ...product, stock: product.stock - 1 },
    ]);
  };

  const values = {
    productsInCart,
    setProductsInCart,
    addToCart,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export { AppContext, ContextProvider };
