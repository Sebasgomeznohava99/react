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
                <h4 className="price">${producto.price}</h4>
                <p className="detailed-description">{producto.description}</p>
                <div className="contador">
                </div>
                <div className='contenedor-imagenes-secundarias'>
                  <img src="" alt="" />
                  <img src="" alt="" />
                  <img src="" alt="" />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ItemDetail