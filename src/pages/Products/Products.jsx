/* eslint-disable react/jsx-key */
import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../common/products.json";
import "./Products.css";
import { useContext, useEffect, useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import { AppContext } from "../../context/AppContext";
export default function Products() {
  const { addToCart } = useContext(AppContext);
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
            return (
              <ProductCard
                imageUrl={product.image_url}
                description={product.short_description}
                title={product.title}
                price={product.current_price}
                onClick={() => addToCart(product)}
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
