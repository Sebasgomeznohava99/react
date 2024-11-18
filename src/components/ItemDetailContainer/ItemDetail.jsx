import './ItemDetail.css'
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
const ItemDetail = ({producto}) => {
  const [currentImage, setCurrentImage]= useState(producto.image[0])
  const images = producto.image.filter((image) => image != currentImage)
  return (
    <>
    <div className="contenedor">
        <div className="image">
            <img src= {currentImage} alt="" className="imagen" />
        </div>
        <div>
            <div className="description">
                <h2>{producto.name}</h2>
                <h4 className="price">${producto.price}</h4>
                <p className="detailed-description">{producto.description}</p>
                <div className="contador">
                  <ItemCount producto = {producto} />
                </div>
                <div className='contenedor-imagenes-secundarias'>
                  {
                    images.map((image) => (
                      <img src={image} onClick={() => setCurrentImage(image)} key = {image} className='imagenes-secundarias-detail'/>
                    ))
                  }
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ItemDetail