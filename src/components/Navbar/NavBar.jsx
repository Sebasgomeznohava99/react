import "./NavBar.css"
import { FaCartShopping } from "react-icons/fa6";
import ecommerceImage from "../../assets/Photoroom-logo.png"
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <div className="navbar">
            <h1 className="titulo">Nohavá</h1>
            <ol className="lista-ordenada">
                <li className="categories">
                    <Link className="links-categories" to = "/category/Camisas">Camisas</Link>
                </li>
                <li className="categories">
                    <Link className="links-categories" to = "/category/Zapatillas">Zapatillas</Link>
                </li>
                <li className="categories">
                    <Link className="links-categories" to = "/category/Gorras">Gorras</Link>
                </li>
                <li className="categories">
                    <Link className="links-categories" to = "/category/Hoodies">Hoodies</Link>
                </li>
                <li>
                    <Link to = "/contact/form"  className="links-categories">Contacto</Link>
                </li>
            </ol>
            <Link to = '/'>
            <img className="imagen-ecommerce" src={ecommerceImage} alt="" />
            </Link>
            <FaCartShopping className="carrito" />
        </div>
    )
}

export default NavBar