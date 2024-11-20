import "./CartIcon.css"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
const CartIcon = () => {
   

    const { totalQuantity } = useContext(CartContext)

    const quantity = totalQuantity()
    return (
        <Link to = "/cart" className="contenedor-carro">
            <FaCartShopping className="carrito" />
            <p className="numero">{quantity >= 1 && quantity}</p>
        </Link >
    )
}

export default CartIcon