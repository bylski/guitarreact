import styles from "./uiStyles/Utils.module.scss";
const Divider = (props) => {
  let setClass = "";
  if (props.type === "horizontal") {
      setClass = styles.dividerHorizontal;
  }
  else if (props.type === "vertical") {
    setClass = styles.dividerVertical;
  }
  else {
    console.log("YOU FORGOT TO SET THE DIVIDER'S TYPE")
  }

  let classes = setClass;

  if (props.className) {
    classes = `${setClass} ${props.className}`;
  }
  return <div style={props.style}className={classes}></div>;
};

export default Divider;
