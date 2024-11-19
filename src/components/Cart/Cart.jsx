import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const Cart = () => {
    const { cart }= useContext(CartContext)
  return (
    <div>
        <h2>Productos en el Carrito</h2>
        {
            cart.map((productCart) => (
                <div className="lista-carrito-productos">
                    <img className="imagen-producto-carrito" src={productCart.image[0]} alt="" />
                    <p>{productCart.name}</p>
                    <p>Cantidad: {productCart.quantity}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Cart