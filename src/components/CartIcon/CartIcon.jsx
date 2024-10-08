import carritoCompras from "../../assets/carrito.png"
import "./CartIcon.css"
const CartIcon = () => {
    return (
        <div>
            <img src= {carritoCompras} alt="" className="carrito"/>
            <p className="numero-carrito">1</p>
        </div>
    )
}

export default CartIcon