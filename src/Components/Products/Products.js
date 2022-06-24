import styles from "./productsStyles/Products.module.scss";
import Card from "../UI/Card";
import Product from "./Product";
import PRODUCTS from "../../utils/PRODUCTS";
import { useContext } from "react";
import CartContext from "../../store/cart-data";

const Products = (props) => {
  const cartCtx = useContext(CartContext);

  const allProducts = PRODUCTS.map((product, i) => {
    const searchQuery = cartCtx.searchQuery;
    if (searchQuery && product.name.toUpperCase().includes(searchQuery.toUpperCase())) {
      return (
        <div key={`productContainer${i}`} className={styles.productContainer}>
          <Product
            index={i}
            productId={product.id}
            key={`product${i}`}
            imgSrc={product.imgSrc}
            productName={product.name}
            productDescription={product.description}
            productPrice={product.price}
          />
        </div>
      );
    } else if (!searchQuery) {
      return (
        <div key={`productContainer${i}`} className={styles.productContainer}>
          <Product
            index={i}
            productId={product.id}
            key={`product${i}`}
            imgSrc={product.imgSrc}
            productName={product.name}
            productDescription={product.description}
            productPrice={product.price}
          />
        </div>
      );
    }
  });

  return <Card className={styles.productsCard}>{allProducts}</Card>;
};

export default Products;
