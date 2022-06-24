
import styles from "../cartModalStyles/cartModalStyles.module.scss";


const CartModalHeader = () => {
  return (
      <div className={styles.headerSections}>
        <div className={styles.headerProductSection}>
          <p>Product</p>
        </div>
        <div className={styles.headerAmountSection}>
          <p>Amount</p>
        </div>
        <div className={styles.headerPriceSection}>
          <p>Price</p>
        </div>
      </div>
  );
};

export default CartModalHeader;
