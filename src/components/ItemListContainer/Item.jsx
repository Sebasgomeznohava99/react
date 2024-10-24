import Contador from "../Contador/Contador"
const Item = ({producto}) => {
  return (
    <>
    <div className='card-container' >
            <img className='image-one' src= {producto.image} alt="" />
            <h2 className='producto-name'>{producto.name}</h2>
            <h3 className='stock'>${producto.price.toLocaleString('es-ES')}</h3>
            < Contador stock = {producto.stock} nombre = {producto.name}/>
        </div>
    </>
  )
}

export default Item