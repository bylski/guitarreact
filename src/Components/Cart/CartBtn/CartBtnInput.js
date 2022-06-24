import styles from "../cartBtnStyles/CartBtn.module.scss";
import { useContext } from 'react';
import CartContext from "../../../store/cart-data";

const CartBtnInput = (props) => {

  const cartCtx = useContext(CartContext) ;

  return (
    <div
      onClick={cartCtx.onCartShow}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      className={`${styles.cartBtnInput} ${
        props.hoverState === true ? styles.cartBtnHover : ""
      }`}
    >
      <p className={`${styles.cartDefaultText} ${
        props.hoverState === true ? styles.cartDefaultTextHover : ""
      }`}>Your Cart</p>
      <p className={`${styles.cartCheckoutText} ${
        props.hoverState === true ? styles.cartCheckoutTextHover : ""
      }`}>Checkout</p>
    </div>
  );
};

export default CartBtnInput;
