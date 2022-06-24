import { createContext } from "react";


const CartContext = createContext({
    productsAmount: 0,
    showCart: false,
})

export default CartContext;