import Card from "./Card";
import { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import styles from "./uiStyles/Modal.module.scss";
import CartContext from "../../store/cart-data";


// const ModalContent = () => {
//   return (
//     <Fragment>
//       <div>
//         <h1>someImg</h1>
//       </div>
//       <div>
//         <h1>Some text</h1>
//       </div>
//     </Fragment>
//   );
// };

// const ModalCloseIcon = () => {
//   return (
//     <div className={styles.closeIconContainer}>
//       <svg
//         version="1.1"
//         id="Capa_1"
//         x="0px"
//         y="0px"
//         viewBox="0 0 41.756 41.756"
//         className={styles.closeIcon}
//       >
//         <g>
//           <path
//             d="M27.948,20.878L40.291,8.536c1.953-1.953,1.953-5.119,0-7.071c-1.951-1.952-5.119-1.952-7.07,0L20.878,13.809L8.535,1.465
//       c-1.951-1.952-5.119-1.952-7.07,0c-1.953,1.953-1.953,5.119,0,7.071l12.342,12.342L1.465,33.22c-1.953,1.953-1.953,5.119,0,7.071
//       C2.44,41.268,3.721,41.755,5,41.755c1.278,0,2.56-0.487,3.535-1.464l12.343-12.342l12.343,12.343
//       c0.976,0.977,2.256,1.464,3.535,1.464s2.56-0.487,3.535-1.464c1.953-1.953,1.953-5.119,0-7.071L27.948,20.878z"
//           />
//         </g>
//       </svg>
//     </div>
//   );
// };

const ModalCard = (props) => {

  let classes = styles.modalCard;
  if (props.isHiding) {
    classes = `${styles.modalCard} ${styles.modalCardHiding}`
  }
  if (props.className) {
    classes = `${classes} ${props.className}`
  }

  return <Card style={props.style} className={classes}>{props.children}</Card>;
};


const Backdrop = (props) => {

  let classes = styles.backdrop;
  if (props.isHiding) {
    classes = `${styles.backdrop} ${styles.backdropIsHiding}`
  }


  return (
    <Fragment>
      <div className={classes}></div>
    </Fragment>
  );
};

const portalElement = document.querySelector("#modal");

const Modal = (props) => {

  const cartCtx = useContext(CartContext);
  

  return (
    <Fragment>
      {cartCtx.showCart && ReactDOM.createPortal(<Backdrop isHiding={props.isHiding}/>, portalElement)}
      {cartCtx.showCart && ReactDOM.createPortal(
        <ModalCard className={props.className} style={props.style} isHiding={props.isHiding}>
          {props.children}
        </ModalCard>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
