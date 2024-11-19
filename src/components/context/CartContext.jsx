import { createContext, useState } from "react";

//Creamos el contexto
const CartContext = createContext()

//Creamos el componente que va a llevar el contexto 
const CartProvider = ({ children }) => {
const [cart, setCart] = useState([])

const addProductInCart = (newProduct) => {
    setCart ([ ...cart, newProduct ])
    console.log(cart)
}

const totalQuantity = () => {
    const quantity = cart.reduce ((total, productCart) => total + productCart.quantity, 0)
    return quantity
}
    return (
        <CartContext.Provider value = { {cart, addProductInCart, totalQuantity} }>
            {children}
        </CartContext.Provider>
    )
}
export {CartContext, CartProvider}