import styles from "./productsStyles/Products.module.scss";
import Card from "../UI/Card";
import Product from "./Product";
import PRODUCTS from "../../utils/PRODUCTS";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-data";

const Products = (props) => {
  const cartCtx = useContext(CartContext);

  const renderProduct = (product, i) => (
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

  const noProductsText = (
    <div className={styles.noProductsTextContainer}>
      <p>No products found for "{cartCtx.searchQuery}"</p>
    </div>
  );

  const allProducts = PRODUCTS.map((product, i) => {
    const searchQuery = cartCtx.searchQuery;
    if (
      searchQuery &&
      product.name.toUpperCase().includes(searchQuery.toUpperCase())
    ) {
      return renderProduct(product, i);
    } else if (!searchQuery) {
      return renderProduct(product, i);
    }
  }).filter((product) => {
    if (product === undefined) {
      return false;
    } else return true;
  });


  return (
    <Card className={styles.productsCard}>
      {allProducts.length !== 0 ? allProducts : noProductsText}
    </Card>
  );
};

export default Products;
