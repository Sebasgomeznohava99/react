import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { FaRegTrashAlt } from "react-icons/fa";

const Cart = () => {
    const { cart, totalPrice, deleteProductById, deleteCart }= useContext(CartContext)
  return (
    <div>
        <h2 className="titulo">Productos en el Carrito</h2>
        {
            cart.map((productCart) => (
                <div key = {productCart.id} className="lista-carrito-productos">
                    <img className="imagen-producto-carrito" src={productCart.image[0]} alt="" />
                    <div className="caracteristicas-carrito">
                    <p><strong>{productCart.name}</strong></p>
                    <p><strong>Cantidad:</strong> {productCart.quantity}</p>
                    <p><strong>Precio c/u:</strong> {(productCart.price).toLocaleString('es-ES')} COP</p>
                    <p><strong>Precio Total: </strong>{(productCart.price * productCart.quantity).toLocaleString('es-ES')} COP</p>

                    <button className="borrar-carrito" onClick={() => deleteProductById(productCart.id) }><FaRegTrashAlt /></button>
                    </div>
                </div>
            ))
        }
        <div className="total-borrar">
        <p className="total"><strong>Precio Total Compra:</strong> {(totalPrice()).toLocaleString('es-ES')} COP</p>
        <button className="borrar-carro-completo" onClick={deleteCart}>Borrar Carrito</button>
        </div>
    </div>
  )
}

export default Cart