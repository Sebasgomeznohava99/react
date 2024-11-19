import "./CartIcon.css"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
const CartIcon = () => {
    const { totalQuantity } = useContext(CartContext)
    return (
        <Link to = "/cart" className="contenedor-carro">
            <FaCartShopping className="carrito" />
            <p className="numero">{ totalQuantity() }</p>
        </Link >
    )
}

export default CartIcon