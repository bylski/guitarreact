import { useState, useContext } from "react";
import styles from "../cartModalStyles/cartModalStyles.module.scss";
import CartContext from "../../../store/cart-data";

const RemoveItemIcon = (props) => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 485 485"
      className={`${styles.removeIcon} ${
        props.hoverState === true ? styles.removeIconHover : ""
      }`}
    >
      <g>
        <g>
          <rect x="67.224" width="350.535" height="71.81" />
          <path
            d="M417.776,92.829H67.237V485h350.537V92.829H417.776z M165.402,431.447h-28.362V146.383h28.362V431.447z M256.689,431.447
			h-28.363V146.383h28.363V431.447z M347.97,431.447h-28.361V146.383h28.361V431.447z"
          />
        </g>
      </g>
    </svg>
  );
};

const Item = (props) => {
  const cartCtx = useContext(CartContext);

  const [hoverState, setHoverState] = useState(false);
  const mouseEnterHandler = () => {
    setHoverState(true);
  };

  const mouseLeaveHandler = () => {
    setHoverState(false);
  };

  const removeButtonHandler = () => {
    cartCtx.onRemoveFromCart({
      productId: props.productId,
      price: props.price,
      amount: props.amount,
    });
  };

  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemProductSection}>
        <div className={styles.imgContainer}>
          <img src={props.imgSrc}></img>
        </div>
        <p>{props.name}</p>
      </div>
      <div className={styles.itemAmountSection}>
        <p>{props.amount}</p>
      </div>
      <div className={styles.itemPriceSection}>
        <p>{props.price.toFixed(2)}$</p>
      </div>
      <div
        onClick={removeButtonHandler}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className={`${styles.removeIconContainer} ${
          hoverState === true ? styles.removeIconContainerHover : ""
        }`}
      >
        <RemoveItemIcon hoverState={hoverState} />
      </div>
    </div>
  );
};

export default Item;
