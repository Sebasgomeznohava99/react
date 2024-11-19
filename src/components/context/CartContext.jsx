import { createContext, useState } from "react";

//Creamos el contexto
const CartContext = createContext()

//Creamos el componente que va a llevar el contexto 
const CartProvider = ({ children }) => {
const [cart, setCart] = useState([])

const addProductInCart = (newProduct) => {
    const productExists = cart.find(product => product.id === newProduct.id);

    if (productExists) {
        const updatedCart = cart.map(product =>
            product.id === newProduct.id
                ? { ...product, quantity: product.quantity + newProduct.quantity }
                : product
        );
        setCart(updatedCart);
    } else {
        setCart([...cart, newProduct]);
    }
}

const totalPrice = () => {
    const price= cart.reduce((total, productCart) => total + (productCart.quantity * productCart.price), 0)
    return price
}

const deleteProductById = (idProduct) => {
    const filterProducts = cart.filter((productCart) => productCart.id !== idProduct)
    setCart(filterProducts)
}

const totalQuantity = () => {
    const quantity = cart.reduce ((total, productCart) => total + productCart.quantity, 0)
    return quantity
}


const deleteCart = () => {
    setCart([])
}
    return (
        <CartContext.Provider value = { {cart, addProductInCart, totalQuantity, totalPrice, deleteProductById, deleteCart} }>
            {children}
        </CartContext.Provider>
    )
}
export {CartContext, CartProvider}