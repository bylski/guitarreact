import { Fragment } from "react";
import styles from "./inputFormsStyles/inputForms.module.scss";

const CartTextInput = (props) => {

  let inputClasses;
  if (props.valid && props.touched) {
    inputClasses = styles.valid;
  } 
  else if (!props.valid && props.touched) {
    inputClasses = styles.invalid;
  }
  else {
    inputClasses = "";
  }

  return (
    <Fragment>
      <div className={styles.textInputContainer}>
        <label style={{fontWeight: "bold"}} htmlFor={props.inputId}>{props.children}</label>
        <input onBlur={props.onBlur} onChange={props.onChange} id={props.inputId} className={inputClasses}></input>
      </div>
    </Fragment>
  );
};

export default CartTextInput;
