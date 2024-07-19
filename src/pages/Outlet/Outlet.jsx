import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../common/onSaleProducts.json";
import "./Outlet.css";
import { useContext, useEffect, useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import { AppContext } from "../../context/AppContext";
export default function Outlet() {
  const { addToCart, productsInCart, removeFromCart } = useContext(AppContext);

  const [page, setPage] = useState(1);
  const proizvod = products.length;
  const brojPoStranici = 15;
  const brojStranica = Math.ceil(proizvod / brojPoStranici);
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, [page]);
  return (
    <>
      <div className="wrapper-product">
        {products
          .map((product) => {
            const productInCart = productsInCart.find(
              (item) => item.id === product.id
            );

            const strPrice = product.current_price;
            const numPrice = +strPrice.replace(".", "").replace(",", ".");
            const newPrice = (
              numPrice -
              (product.percentage / 100) * numPrice
            ).toFixed(2);

            const formattedPrice = new Intl.NumberFormat("de-DE", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(newPrice);
            return (
              <ProductCard
                key={product.id}
                imageUrl={product.image_url}
                description={product.short_description}
                title={product.title}
                onClick={() => {
                  if (productInCart) {
                    removeFromCart(product);
                  } else {
                    addToCart({ ...product, discountedPrice: formattedPrice });
                  }
                }}
                product={product}
                price={product.current_price}
                discount={product.percentage ? true : false}
                discountedPrice={newPrice}
              />
            );
          })
          .slice(brojPoStranici * (page - 1), brojPoStranici * page)}
      </div>
      <div className="pagination">
        <Pagination brojStranica={brojStranica} setPage={setPage} page={page} />
      </div>
    </>
  );
}
