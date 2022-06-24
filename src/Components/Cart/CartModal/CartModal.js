import Modal from "../../UI/Modal";
import Items from "./Items";
import styles from "../cartModalStyles/cartModalStyles.module.scss";
import ThemedButton from "../../UI/ThemedButton";
import { useContext, useState } from "react";
import CartContext from "../../../store/cart-data";
import Divider from "../../UI/Divider";

const CartIcon = () => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      width= "30px"
      viewBox="-60 0 790 902.86"
      transform="scale (-1, 1)"
      transform-origin="center"
      fill={"black"}
    >
      <g>
        <g>
          <path
            d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z
                M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"
          />
          <path
            d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717
                c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744
                c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742
                C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744
                c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z
                M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742
                S619.162,694.432,619.162,716.897z"
          />
        </g>
      </g>
    </svg>
  );
};

const CartModal = () => {
  const cartCtx = useContext(CartContext);

  const [cartIsHiding, setCartIsHiding] = useState(false);
  const cartHideHandler = () => {
    setCartIsHiding(true);
    setTimeout(() => {
      cartCtx.onCartHide();
      setCartIsHiding(false);
    }, 950);
  };

  
  const orderHandler = () => {
     console.log("ORDERED SUCCESSFULLY")
     cartCtx.onClearCart();
     cartHideHandler();
  }

 

  return (
    <Modal isHiding={cartIsHiding}>
      <div className={styles.modalHead}>
        <h1 style={{ margin: "0px" }}>Your Cart</h1>
        <ThemedButton onClick={cartHideHandler} className={styles.cartBackBtn}>
          Exit Cart
        </ThemedButton>
      </div>
      <Divider
        style={{ borderWidth: "4px" }}
        type={"horizontal"}
        className={styles.itemDivider}
      />
      <div className={styles.cartModalContainer}>
        { cartCtx.cartItems.length === 0 ? <p class={styles.emptyCartText}>Your cart is empty</p> : null}
        <Items />
      </div>
      <Divider
        style={{ borderWidth: "4px" }}
        type={"horizontal"}
        className={styles.itemDivider}
      />
      <div className={styles.modalFooter}>
        <p className={styles.totalPriceText} style={{ margin: "0px" }}>
          Total: <span>{cartCtx.cartPrice.toFixed(2)}$</span>
        </p>
        <ThemedButton onClick={orderHandler} className={styles.cartOrderBtn}>Order Now</ThemedButton>
      </div>
    </Modal>
  );
};

export default CartModal;
