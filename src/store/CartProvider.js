import CartContext from "./cart-data";
import { useState } from "react";

const CartProvider = (props) => {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  const cartCountPrice = (item, action) => {
    setCartTotalPrice((prevState) => {
      if (action === "added") return prevState += (item.price * item.amount);
      else if (action === "removed") return prevState -= (item.price * item.amount);
    })
  }

  const [cartItemsArr, setCartItemsArr] = useState([]);
  const addToCartHandler = (newItem) => {

    cartCountPrice(newItem, "added");
    let alreadyInCart = false;

    const UpdatedCartItemsArr = cartItemsArr.map((item) => {
      // If new item is already in the cart, add to it's amount
      if (newItem.id === item.id) {
        item.amount += newItem.amount;
        alreadyInCart = true;
      }

      return { amount: item.amount, id: item.id };
    });

    if (alreadyInCart) {
      setCartItemsArr(UpdatedCartItemsArr);
    } else {
      // Else add it to the cart items
      setCartItemsArr((prevState) => {
        return [...prevState, newItem];
      });
    }
  };

  const removeFromCartHandler = (removedItem) => {
    cartCountPrice(removedItem, "removed")
    const UpdatedCartItemsArr = cartItemsArr.filter((item) => {
      return item.id != removedItem.productId;
    });

    setCartItemsArr(UpdatedCartItemsArr);
  };

  const [searchQuery, setSearchQuery] = useState('')
  const searchQueryHandler = (query) => {
    setSearchQuery(query);
  } 

  const cartCountAmount = () => {
    if (cartItemsArr.length != 0) {
      let amountSum = 0;
      cartItemsArr.forEach((item) => {
        amountSum += item.amount;
      });
      return amountSum;
    } else {
      return 0;
    }
  };

  const clearCartHandler = () => {
    setCartItemsArr([]);
  }

  const cartContext = {
    onCartShow: showCartHandler,
    onCartHide: hideCartHandler,
    onAddToCart: addToCartHandler,
    onRemoveFromCart: removeFromCartHandler,
    cartItems: cartItemsArr,
    cartAmount: cartCountAmount,
    cartPrice: cartTotalPrice,
    showCart: showCart,
    onSearchQuery: searchQueryHandler,
    searchQuery: searchQuery,
    onClearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
