import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function Cart() {
  const { productsInCart } = useContext(AppContext);
  console.log(productsInCart);
  return <></>;
}
