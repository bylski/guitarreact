import { Fragment, useEffect, useState } from "react";
import styles from "../cartBtnStyles/CartBtn.module.scss";
import CartBtnIcon from "./CartBtnIcon";
import CartBtnContainer from "./CartBtnContainer";
import CartBtnInput from "./CartBtnInput";
import CartBtnQty from "./CartBtnQty";
import Divider from "../../UI/Divider";

const CartBtn = () => {
  const [isCartBtnMinimized, setCartBtnMinimize] = useState(false);

  const detectBreakpoint = () => {
    const mediaQuery = window.matchMedia("(max-width: 992px)");

    if (mediaQuery.matches) {
      setCartBtnMinimize(false);
    } else {
      setCartBtnMinimize(true);
    }
  };

  useEffect(() => {
    detectBreakpoint();
    window.addEventListener("resize", detectBreakpoint);
  }, []);

  const [hoverState, setHoverState] = useState(false);
  const onMouseEnterHandler = (event) => {
    setHoverState(true);
  };

  const onMouseLeaveHandler = (event) => {
    setHoverState(false);
  };

  return (
    <CartBtnContainer>
      { isCartBtnMinimized ? 
        <CartBtnInput
          hoverState={hoverState}
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={onMouseLeaveHandler}
        />
        : null
      }
      <Divider
        type={"vertical"}
        className={`${styles.cartDivider} ${
          hoverState === true ? styles.cartDividerHover : ""
        }`}
      />
      <CartBtnIcon
        hoverState={hoverState}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        className={`${styles.cartIcon} ${
          hoverState === true ? styles.cartIconHover : ""
        }`}
      />
      <CartBtnQty hoverState={hoverState} />
    </CartBtnContainer>
  );
};

export default CartBtn;
