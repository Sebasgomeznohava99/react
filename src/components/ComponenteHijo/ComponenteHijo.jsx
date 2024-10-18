import './ComponenteHijo.css'
import Contador from '../Contador/Contador'

const ComponenteHijo = ({nombre, stock, precio, img, primerApoyo, segundoApoyo, tercerApoyo}) => {
    return (
        <>
        <div className='card-container'>
            <img className='image-one' src= {img} alt="" />
            <div className='grid-images'>
            <img className='image-grid' src ={primerApoyo} alt="" />
            <img className='image-grid' src = {segundoApoyo} alt="" />
            <img className='image-grid' src = {tercerApoyo} alt="" />
            </div>
            <h2 className='producto-name'>{nombre}</h2>
            <h3 className='stock'>{precio.toLocaleString('es-ES')}</h3>
            < Contador stock = {stock} nombre = {nombre}/>
        </div>
        </>
    )
}

export default ComponenteHijo    