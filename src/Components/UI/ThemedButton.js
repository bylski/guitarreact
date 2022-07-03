import { isDisabled } from "@testing-library/user-event/dist/utils";
import styles from "./uiStyles/Utils.module.scss";

const ThemedButton = (props) => {
  let classes;
  let initClasses = styles.themedButton;

  if (props.className) {
    classes = `${initClasses} ${props.className}`;
  }

  if (props.disabled) {
    return (
      <button disabled form={props.form} onClick={props.onClick} className={classes}>
        {props.children}
      </button>
    );
  } else {
    return (
      <button form={props.form} onClick={props.onClick} className={classes}>
        {props.children}
      </button>
    );
  }
};

export default ThemedButton;
