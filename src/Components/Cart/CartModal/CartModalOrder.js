import styles from "../cartModalStyles/cartModalStyles.module.scss";
import CartTextInput from "../../InputForms/CartTextInput";
import Divider from "../../UI/Divider";
import { useState, useEffect, useContext } from "react";
import useValidation from "../../../hooks/use-validation";
import CartContext from "../../../store/cart-data";

const CartModalOrder = (props) => {

  const cartCtx = useContext(CartContext);

  // VALIDATION LOGIC FROM "useValidation" HOOK

  // checks if there is text in input
  const isNotEmptyValidation = (inputValue) => {
    if (inputValue.trim() === "") {
      return false;
    } else {
      return true;
    }
  };

  // checks if email includes @ sign (simplistic validation)
  const emailValidation = (inputValue) => {
    if (!inputValue.trim().includes("@") || inputValue.trim() === "") {
      return false;
    } else {
      return true;
    }
  };

  const phoneNumValidation = (inputValue) => {
    if (inputValue.replace(/ /g, "").length !== 9 || inputValue.trim() === "") {
      return false;
    } else {
      return true;
    }
  };

  // Name Validation
  const {
    isValid: isNameValid,
    isTouched: isNameTouched,
    inputValue: nameValue,
    lostTouchHandler: nameLostTouchHandler,
    inputChangeHandler: nameChangeHandler,
  } = useValidation(isNotEmptyValidation);

  // Last Name Validation
  const {
    isValid: isPhoneNumValid,
    isTouched: isPhoneNumTouched,
    inputValue: phoneNumValue,
    lostTouchHandler: phoneNumLostTouchHandler,
    inputChangeHandler: phoneNumChangeHandler,
  } = useValidation(phoneNumValidation);

  // Email Validation
  const {
    isValid: isEmailValid,
    isTouched: isEmailTouched,
    inputValue: emailValue,
    lostTouchHandler: emailLostTouchHandler,
    inputChangeHandler: emailChangeHandler,
  } = useValidation(emailValidation);

  // City Validation
  const {
    isValid: isCityValid,
    isTouched: isCityTouched,
    inputValue: cityValue,
    lostTouchHandler: cityLostTouchHandler,
    inputChangeHandler: cityChangeHandler,
  } = useValidation(isNotEmptyValidation);

  // Street Validation
  const {
    isValid: isStreetValid,
    isTouched: isStreetTouched,
    inputValue: streetValue,
    lostTouchHandler: streetLostTouchHandler,
    inputChangeHandler: streetChangeHandler,
  } = useValidation(isNotEmptyValidation);

  // Postal Code Validation
  const {
    isValid: isPostalCodeValid,
    isTouched: isPostalCodeTouched,
    inputValue: postalCodeValue,
    lostTouchHandler: postalCodeLostTouchHandler,
    inputChangeHandler: postalCodeChangeHandler,
  } = useValidation(isNotEmptyValidation);

  const inputValidityArr = [
    isPostalCodeValid,
    isNameValid,
    isStreetValid,
    isPhoneNumValid,
    isCityValid,
    isEmailValid,
  ];

  useEffect(() => {
    let isValid = true;
    for (let inputValidity of inputValidityArr) {
      if (!inputValidity) {
        isValid = false;
        break;
      }
    }
    props.onFormValidity(isValid);
  }, [inputValidityArr])


  const submitOrderHandler = (event) => {
    event.preventDefault();
    props.onShowSubmitMessage();
    setTimeout(() => {
      props.onHideCart();
      setTimeout(() => {
        props.onHideSubmitMessage();
      }, 1000)
    }, 2000)
  }


  return (
    <div className={styles.orderFormContainer}>
      <h2 style={{ textAlign: "center" }}>Order Information</h2>
      <form
        id="order-form"
        onSubmit={submitOrderHandler}
        className={styles.orderForm}
      >
        <Divider style={{ borderWidth: "1px" }} type={"vertical"} />
        <div className={styles.formColumn}>
          <CartTextInput
            onBlur={nameLostTouchHandler}
            onChange={nameChangeHandler}
            value={nameValue}
            inputId={"nameInput"}
            valid={isNameValid}
            touched={isNameTouched}
          >
            Name
          </CartTextInput>
          <CartTextInput
            onBlur={emailLostTouchHandler}
            onChange={emailChangeHandler}
            value={emailValue}
            valid={isEmailValid}
            touched={isEmailTouched}
            inputId={"emailInput"}
          >
            Email
          </CartTextInput>
          <CartTextInput
            onBlur={phoneNumLostTouchHandler}
            onChange={phoneNumChangeHandler}
            value={phoneNumValue}
            valid={isPhoneNumValid}
            touched={isPhoneNumTouched}
            inputId={"emailInput"}
          >
            Phone Number
          </CartTextInput>
        </div>

        <div className={styles.formColumn}>
          <CartTextInput
            onBlur={cityLostTouchHandler}
            onChange={cityChangeHandler}
            value={cityValue}
            valid={isCityValid}
            touched={isCityTouched}
            inputId={"cityInput"}
          >
            City
          </CartTextInput>
          <CartTextInput
            onBlur={streetLostTouchHandler}
            onChange={streetChangeHandler}
            value={streetValue}
            valid={isStreetValid}
            touched={isStreetTouched}
            inputId={"streetInput"}
          >
            Street
          </CartTextInput>
          <CartTextInput
            onBlur={postalCodeLostTouchHandler}
            onChange={postalCodeChangeHandler}
            value={postalCodeValue}
            valid={isPostalCodeValid}
            touched={isPostalCodeTouched}
            inputId={"postalCodeInput"}
          >
            Postal Code
          </CartTextInput>
        </div>
        <Divider style={{ borderWidth: "1px" }} type={"vertical"} />
      </form>
    </div>
  );
};

export default CartModalOrder;
