import "./NavBar.css"
import CartIcon from "../CartIcon/CartIcon"
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
            < CartIcon />
        </div>
    )
}

export default NavBar