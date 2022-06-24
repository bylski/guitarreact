import styles from "../cartBtnStyles/CartBtn.module.scss";
import { useContext, useEffect, useRef } from "react";
import CartContext from "../../../store/cart-data";

const CartBtnQty = (props) => {

  const cartCtx = useContext(CartContext); 

  const cartQtyRef = useRef()

  useEffect(() => {
    setTimeout(() => {
      cartQtyRef.current.classList.remove(styles.popUp)
    }, 200)
    cartQtyRef.current.classList.add(styles.popUp);
  }, [cartCtx.cartAmount()])


  return (
    <div
      ref={cartQtyRef}
      style={cartCtx.cartAmount() <= 0 ? {display: 'none'} : {}}
      className={`${styles.cartQty} ${
        props.hoverState === true ? styles.cartQtyHover : ""
      }`}
    >
      <p>{cartCtx.cartAmount()}</p>
    </div>
  );
};

export default CartBtnQty;
