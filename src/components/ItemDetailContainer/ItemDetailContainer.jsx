import { getProducts } from "../../data/data.js"
import { useState, useEffect } from "react"
import ItemDetail from './ItemDetail.jsx'
import { useParams } from "react-router-dom"
const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const {idProduct} = useParams()
    useEffect (() => {
        getProducts()
        .then ((data) => {
            const productoDetallado = data.find((producto) => producto.id === idProduct)
            setProducto(productoDetallado)
        })
    }, [idProduct])

  return (
    <ItemDetail producto = {producto} />
  )
}

export default ItemDetailContainer