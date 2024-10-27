import Contador from "../Contador/Contador"
import './ItemDetail.css'

const ItemDetail = ({producto}) => {
  return (
    <>
    <div className="contenedor">
        <div className="image">
            <img src= {producto.image} alt="" className="imagen" />
        </div>
        <div>
            <div className="description">
                <h2>{producto.name}</h2>
                <h4>${producto.price}</h4>
                <p className="detailed-description">Éste tejido de punto esta provisto de propiedades térmicas y es agradable al contacto con la piel. En su cara frontal cuenta con un acabado liso mientras que en su revés esta dotado de un terminado perchado, al cual se le atribuye su nombre.</p>
                <div className="contador">
                  <Contador stock={producto.stock} nombre = {producto.name}/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ItemDetail