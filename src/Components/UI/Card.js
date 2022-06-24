import styles from './uiStyles/Utils.module.scss'

const Card = (props) => {
    
    let classes = styles.card;
    if (props.className) {
        classes = `${styles.card} ${props.className}`
    }

    return(
        <div className={classes}>
            {props.children && props.children} 
        </div>
    )
}

export default Card;