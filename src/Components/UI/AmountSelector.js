import styles from "./uiStyles/Utils.module.scss";
import { useState } from "react";

const AmountSelector = (props) => {
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

  let btnClasses = styles.inputControlBtn;
    if (props.btnClassName) {
        btnClasses = `${styles.inputControlBtn} ${props.btnClassName}`
    }


    let inputsWrapClasses = styles.inputsWrap;
    if (props.inputsWrapClassname) {
        inputsWrapClasses = `${styles.inputsWrap} ${props.inputsWrapClassname}`
    }

  return (
    <div className={inputsWrapClasses}>
      <input
        onKeyDown={inputKeyValidityHandler}
        onChange={amountChangeHandler}
        onBlur={onBlurHandler}
        id="amountChanger"
        value={currentAmount}
        type="text"
      ></input>
      <button onClick={amountAddHandler} className={btnClasses}>
        +
      </button>
      <button
        onClick={amountSubtractHandler}
        className={btnClasses}
      >
        -
      </button>
    </div>
  );
};

export default AmountSelector;
