import Modal from "../../UI/Modal";
import Items from "./Items";
import styles from "../cartModalStyles/cartModalStyles.module.scss";
import ThemedButton from "../../UI/ThemedButton";
import { UseEffect, useContext, useState, Fragment, useEffect } from "react";
import CartContext from "../../../store/cart-data";
import Divider from "../../UI/Divider";
import CartModalOrder from "./CartModalOrder";


const CartModal = () => {
  const cartCtx = useContext(CartContext);

  const [cartIsHiding, setCartIsHiding] = useState(false);
  const cartHideHandler = () => {
    cartSetOrdering(false);
    setCartIsHiding(true);
      setTimeout(() => {
        cartCtx.onCartHide();
        setCartIsHiding(false);
      }, 950);
  };

  const [cartOrdering, cartSetOrdering] = useState(false);
  const startOrderHandler = () => {
    cartSetOrdering(true);
  };

  const [isSubmitBtnDisabled, setSubmitBtnDisabled] = useState(false);
  const formValidityHandler = (isValid) => {
    if (isValid) {
      setSubmitBtnDisabled(false);
    } else {
      setSubmitBtnDisabled(true);
    }
  };

  // Close Ordering Tab if there are no itmes
  useEffect(() => {
    if (cartCtx.cartItems.length === 0) {
      cartSetOrdering(false);
    }
  }, [cartCtx.cartItems]);

  const [isSubmitMessageShown, setSubmitMessageShown] = useState(false);
  const submitMessageShow = () => {
    cartCtx.onClearCart();
    setSubmitMessageShown(true);
  };
  const submitMessageHide = () => {
    setSubmitMessageShown(false);
  };

  const footerContent = (
    <div className={styles.modalFooter}>
      <p className={styles.totalPriceText} style={{ margin: "0px" }}>
        Total: <span>{cartCtx.cartPrice.toFixed(2)}$</span>
      </p>
      <ThemedButton
        onClick={startOrderHandler}
        className={styles.cartOrderBtn}
        disabled={cartCtx.cartAmount() === 0 ? true : false}
      >
        Order Now
      </ThemedButton>
    </div>
  );

  const footerOrderingContent = (
    <div className={styles.modalOrderFooter}>
      <CartModalOrder
        onHideCart={cartHideHandler}
        onShowSubmitMessage={submitMessageShow}
        onHideSubmitMessage={submitMessageHide}
        onFormValidity={formValidityHandler}
      />
      <div className={styles.orderSubmitContainer}>
        <p className={styles.totalPriceText} style={{ margin: "0px" }}>
          Total: <span>{cartCtx.cartPrice.toFixed(2)}$</span>
        </p>

        <ThemedButton
          className={styles.cartOrderBtn}
          form="order-form"
          disabled={isSubmitBtnDisabled}
        >
          Submit Order
        </ThemedButton>
      </div>
    </div>
  );

  if (isSubmitMessageShown === false) {
    return (
      <Modal
        style={cartOrdering ? { overflowY: "scroll" } : {}}
        isHiding={cartIsHiding}
      >
        <div className={styles.modalHead}>
          <h1 style={{ margin: "0px" }}>Your Cart</h1>
          <ThemedButton
            onClick={cartHideHandler}
            className={styles.cartBackBtn}
          >
            Exit Cart
          </ThemedButton>
        </div>
        <Divider
          style={{ borderWidth: "4px" }}
          type={"horizontal"}
          className={styles.itemDivider}
        />
        <div className={styles.cartModalContainer}>
          {cartCtx.cartItems.length === 0 ? (
            <p className={styles.emptyCartText}>Your cart is empty</p>
          ) : null}
          <Items />
        </div>
        <Divider
          style={{ borderWidth: "4px" }}
          type={"horizontal"}
          className={styles.itemDivider}
        />
        {!cartOrdering && footerContent}
        {cartOrdering && footerOrderingContent}
      </Modal>
    );
  } else {

    return (
      <Modal isHiding={cartIsHiding} className={styles.orderSubmittedModal}>
        <p>Ordered Items Sucessfully</p>
      </Modal>
    );
  }
};

export default CartModal;
