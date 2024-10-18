import './ComponentePadre.css'
import hoodiePrincipal from '../../assets/hoodie-principal.webp'
import hoodieApoyo1 from '../../assets/hoodie-1.webp'
import hoodieApoyo2 from '../../assets/hoodie-2.jpg'
import hoodieApoyo3 from '../../assets/hoodie-3.jpg'
import camisaPrincipal from '../../assets/camisa-principal.jpg'
import camisaApoyo1 from '../../assets/camisa-1.jpg'
import camisaApoyo2 from '../../assets/camisa-2.jpg'
import camisaApoyo3 from '../../assets/camisa-3.jpg'
import pantalonPrincipal from '../../assets/pantalonPrincipal.jpg'
import pantalonApoyo1 from '../../assets/pantalon-1.jpg'
import pantalonApoyo2  from '../../assets/pantalon-2.jpg'
import pantalonApoyo3 from '../../assets/pantalon-3.jpg'
import ComponenteHijo from "../ComponenteHijo/ComponenteHijo"
import '../Carrito/Carrito'

const ComponentePadre = () => {
  return (
    <>
    <div className="cards-productos">
    <ComponenteHijo nombre = 'Hoodies' stock = '1' precio = {60000} img = {hoodiePrincipal} primerApoyo = {hoodieApoyo1} segundoApoyo = {hoodieApoyo2} tercerApoyo={hoodieApoyo3}/>
    <ComponenteHijo nombre = 'Pantalones' stock = '2' precio = {20000} img = {pantalonPrincipal} primerApoyo= {pantalonApoyo1} segundoApoyo= {pantalonApoyo2} tercerApoyo= {pantalonApoyo3}/>
    <ComponenteHijo nombre = 'Camisas' stock = '10' precio = {10000} img = {camisaPrincipal} primerApoyo= {camisaApoyo1} segundoApoyo= {camisaApoyo2} tercerApoyo= {camisaApoyo3}/>
    </div>
    </>
  )
}

export default ComponentePadre