import { Fragment } from "react";
import styles from "./inputFormsStyles/inputForms.module.scss";

const CartTextInput = (props) => {
  return (
    <Fragment>
      <div className={styles.textInputContainer}>
        <label style={{fontWeight: "bold"}}htmlFor={props.inputId}>{props.children}</label>
        <input onChange={props.onChange} id={props.inputId}></input>
      </div>
    </Fragment>
  );
};

export default CartTextInput;
