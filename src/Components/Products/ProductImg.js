import styles from "./productsStyles/Products.module.scss";

const ProductImg = (props) => {
  return (
    <div className={styles.imgContainer}>
      <img
        className={styles.productImg}
        src={props.imgSrc}
      ></img>
    </div>
  );
};

export default ProductImg;
