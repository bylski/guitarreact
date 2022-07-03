import styles from "../cartModalStyles/cartModalStyles.module.scss";
import CartTextInput from "../../InputForms/CartTextInput";
import Divider from "../../UI/Divider";
import { useState, useEffect } from "react";

const validationHandler = (event) => {
  // if (event.target.value.trim() === '') {
  //   console.log("WRONG")
  // }
}

const CartModalOrder = (props) => {
  return (
    <div className={styles.orderFormContainer}>
      <h2 style={{ textAlign: "center" }}>Order Information</h2>
      <form id='order-form' className={styles.orderForm}>
        <Divider style={{ borderWidth: "1px" }} type={"vertical"} />
        <div className={styles.formColumn}>
          <CartTextInput onChange={validationHandler} inputId={"nameInput"}>Name</CartTextInput>
          <CartTextInput inputId={"lastNameInput"}>Last Name</CartTextInput>
          <CartTextInput inputId={"emailInput"}>Email</CartTextInput>
        </div>

        <div className={styles.formColumn}>
          <CartTextInput inputId={"cityInput"}>City</CartTextInput>
          <CartTextInput inputId={"streetInput"}>Street</CartTextInput>
          <CartTextInput inputId={"postalCodeInput"}>Postal Code</CartTextInput>
        </div>
        <Divider style={{ borderWidth: "1px" }} type={"vertical"} />
      </form>
    </div>
  );
};

export default CartModalOrder;
