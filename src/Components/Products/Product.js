import styles from "./productsStyles/Products.module.scss";
import ProductContent from "./ProductContent";
import ProductImg from "./ProductImg";
import Divider from "../UI/Divider";
import { Fragment } from "react";


const Product = (props) => {
  return (
    <Fragment>
      <ProductImg imgSrc={props.imgSrc}/>
      <Divider type={"vertical"} className={styles.contentDivider} />
      <ProductContent productId={props.productId} index={props.index} price={props.productPrice.toFixed(2)} name={props.productName} description={props.productDescription}/>
    </Fragment>
  );
};

export default Product;
