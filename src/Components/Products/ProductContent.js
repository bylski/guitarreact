import styles from "./productsStyles/Products.module.scss";
import ProductInputs from "./ProductInputs";
import Divider from "../UI/Divider";
import { useState, useEffect, Fragment } from "react";

const ProductContent = (props) => {

  const [isMediumBreakpoint, setMediumBreakpoint] = useState(false);
  const [isSmallBreakpoint, setSmallBreakpoint] = useState(false);

  const detectBreakpoint = () => {
    const mediumMediaQuery = window.matchMedia("(max-width: 768px)");
    const smallMediaQuery = window.matchMedia("(max-width: 567px)");

    if (mediumMediaQuery.matches) {
      setMediumBreakpoint(true)
    } else {
      setMediumBreakpoint(false);
    }
    if (smallMediaQuery.matches) {
      setSmallBreakpoint(false)
    } else {
      setSmallBreakpoint(true);
    }
  };

  useEffect(() => {
    detectBreakpoint();
    window.addEventListener("resize", detectBreakpoint);
  }, []);


  const descriptionRender = () => {
    return (
      <Fragment>
      {isSmallBreakpoint && <p>{isMediumBreakpoint === true ? props.description.substring(0, 90) + '...' : props.description}</p>}
      </Fragment>
    )
  }

  return (
    <div className={styles.contentContainer}>
      <div className={styles.contentLeftColumn}>
        <h2>{props.name}</h2>
        {descriptionRender()}
      </div>
      <div className={styles.contentRightColumn}>
        <div>
          <p>{props.price}$</p>
        </div>
        <ProductInputs productPrice={props.price} productId={props.productId} index={props.index}/>
      </div>
    </div>
  );
};

export default ProductContent;
