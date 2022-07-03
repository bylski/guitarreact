import { useState, useContext } from "react";
import styles from "./productsStyles/Products.module.scss";
import ThemedButton from "../UI/ThemedButton";
import CartContext from "../../store/cart-data";

const ProductInputs = (props) => {
  const cartCtx = useContext(CartContext);

  const [keyValidationState, setKeyValidationState] = useState(true);
  const inputKeyValidityHandler = (event) => {
    const inputVal = event.key;
    if (isNaN(parseInt(inputVal)) && inputVal !== "Backspace") {
      setKeyValidationState(false);
    } else {
      setKeyValidationState(true);
    }
  };

  const [focusState, setFocusState] = useState(false);
  const onBlurHandler = (event) => {
    const inputVal = event.target.value;
    if (inputVal <= 0 || inputVal === "") {
      setAmount("1");
      return;
    }
  };

  const [currentAmount, setAmount] = useState("1");
  const amountChangeHandler = (event) => {
    const inputVal = event.target.value;
    if (keyValidationState === true && inputVal <= 99) {
      setAmount(inputVal);
    }
  };

  const amountAddHandler = () => {
    if (parseInt(currentAmount) !== 99)
      setAmount((prevState) => parseInt(prevState) + 1);
  };

  const amountSubtractHandler = () => {
    if (parseInt(currentAmount) !== 1)
      setAmount((prevState) => parseInt(prevState) - 1);
  };

  const productFormHandler = (event) => {
    event.preventDefault();
    const item = {
      amount: parseInt(currentAmount),
      id: props.productId,
      price: props.productPrice,
    };

    cartCtx.onAddToCart(item);
  };

  return (
    <form onSubmit={productFormHandler} className={styles.contentInputs}>
      <div>
        <label htmlFor={`amountChanger${props.index}`}>Amount</label>
        <div className={styles.inputsWrap}>
          <input
            onKeyDown={inputKeyValidityHandler}
            onChange={amountChangeHandler}
            onBlur={onBlurHandler}
            id={`amountChanger${props.index}`}
            value={currentAmount}
            type="text"
          ></input>
          <button
            type="button"
            onClick={amountAddHandler}
            className={styles.inputControlBtn}
          >
            +
          </button>
          <button
            type="button"
            onClick={amountSubtractHandler}
            className={styles.inputControlBtn}
          >
            -
          </button>
        </div>
      </div>
      <ThemedButton className={styles.addProductBtn}>Add</ThemedButton>
    </form>
  );
};

export default ProductInputs;
