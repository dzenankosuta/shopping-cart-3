import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../common/products.json";
import "./Products.css";
import { useContext, useEffect, useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import { AppContext } from "../../context/AppContext";
export default function Products() {
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
                    addToCart(product);
                  }
                }}
                product={product}
                price={product.current_price}
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
