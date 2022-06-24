import CartModalHeader from "./CartModalHeader";
import styles from "../cartModalStyles/cartModalStyles.module.scss";
import { Fragment, useContext } from 'react';
import CartContext from "../../../store/cart-data";
import Item from "./Item"
import Divider from "../../UI/Divider";
import PRODUCTS from "../../../utils/PRODUCTS";



const Items = () => {

  const cartCtx = useContext(CartContext); 
const cartItems = cartCtx.cartItems.map((item, i) => {

    const productId = item.id; 
    const itemAmount = item.amount;
    let itemName = '';
    let itemPrice = '';
    let itemImgSrc = '';

    for (const product of PRODUCTS) {
      if (item.id === product.id) {
        itemName = product.name;
        itemPrice = product.price;
        itemImgSrc = product.imgSrc;
        break;
      }
    }

     return(
    <Fragment key={`itemFragment${i}`}>
    <Item 
    name={itemName}
    imgSrc={itemImgSrc}
    price={itemPrice}
    amount={itemAmount}
    key={`item${i}`}
    productId={productId}
    />
    {i != PRODUCTS.length-1  && <Divider type={"horizontal"} className={styles.itemDivider} />}
    </Fragment>
  )
})

  
  return (
  <div className={styles.itemsContainer}>
    <CartModalHeader />
    {cartItems}
  </div>
  );
};

export default Items;
