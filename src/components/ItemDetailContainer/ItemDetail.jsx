import './ItemDetail.css'
import { useState } from 'react'
import { useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
const ItemDetail = ({producto}) => {
  
  const {addProductInCart} = useContext(CartContext)

  const [currentImage, setCurrentImage]= useState(producto.image[0])

  const images = producto.image.filter((image) => image != currentImage)

  const [showItemCount, setShowItemCount] = useState(true)

  const addProduct = (count) => {
   
    const productCart = {...producto, quantity: count}
    addProductInCart(productCart)
    setShowItemCount(false)
  }
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
                {
                showItemCount === true ? (
                <div className="contador">
                  <ItemCount producto = {producto} addProduct = {addProduct}/>
                </div>
                ) : <Link to= "/cart">Terminar Mi Compra</Link>
                }
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