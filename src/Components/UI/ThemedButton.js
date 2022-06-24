import styles from "./uiStyles/Utils.module.scss";

const ThemedButton = (props) => {

    let classes = styles.themedButton;

    if (props.className) {
        classes = `${styles.themedButton} ${props.className}`  
    }


    return(
        <button onClick={props.onClick} className={props.hoverState === true ? `${classes} ${styles.themedButtonHover}` : classes}>{props.children}</button>
    )
}

export default ThemedButton;