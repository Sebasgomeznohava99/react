import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
const Item = ({producto}) => {
  return (
    <>
    <div className='card-container' >
            <img className='image-one' src= {producto.image[0]} alt="" />
            <h2 className='producto-name'>{producto.name}</h2>
            <h3 className='stock'>${producto.price.toLocaleString('es-ES')}</h3>
            <div className="contenedor-imagenes-alternas">
              <img className="imagenes-alternas" src= {producto.image[1]} alt="" />
              <img className="imagenes-alternas" src= {producto.image[2]} alt="" />
              <img className="imagenes-alternas" src= {producto.image[3]} alt="" />
            </div>
              <ItemCount producto = {producto}/>
            <div className="detail">
            <Link to = {'/detail/' + producto.id} className="link">Ver Detalle</Link>
            </div>
        </div>
    </>
  )
}

export default Item