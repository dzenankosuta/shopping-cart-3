import productsJSON from "../../common/products.json";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Products.css";

export default function Products() {
  // const [products, setProducts] = useState(productsJSON);
  // const setNewProducts = () => {
  //   const newProducts = products.map((product, index) => {
  //     return {
  //       ...product,
  //       id: index + 1,
  //       stock: Math.floor(Math.random() * 40) + 10,
  //     };
  //   });
  //   setProducts(newProducts);
  // };

  // useEffect(() => {
  //   setNewProducts();
  // }, []);
  // console.log(products);
  return (
    <div className="products-page">
      {productsJSON.map((product) => (
        <ProductCard
          key={product.id}
          imageUrl={product.image_url}
          product={product.title}
          description={product.short_description}
          price={product.current_price}
        />
      ))}
    </div>
  );
}
