import "./NavBar.css"
import { FaCartShopping } from "react-icons/fa6";
import ecommerceImage from "../../assets/Photoroom-logo.png"
const NavBar = () => {
    return (
        <div className="navbar">
            <h1 className="titulo">Nohavá</h1>
            <ol className="lista-ordenada">
                <li>Ropa</li>
                <li>Computadoras</li>
                <li>Deportes</li>
                <li>Viajes</li>
                <li>Programacion</li>
            </ol>
            <img className="imagen-ecommerce" src={ecommerceImage} alt="" />
            <FaCartShopping className="carrito" />
        </div>
    )
}

export default NavBar