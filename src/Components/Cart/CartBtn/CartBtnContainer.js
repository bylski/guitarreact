import styles from "../cartBtnStyles/CartBtn.module.scss";

const CartBtnContainer = (props) => {
  return <div className={styles.cartContainer}>{props.children}</div>;
};

export default CartBtnContainer;
