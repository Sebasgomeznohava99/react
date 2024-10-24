import { getProducts } from "../../data/data.js"
import { useState, useEffect } from "react"
import ItemDetail from './ItemDetail.jsx'
const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    useEffect (() => {
        getProducts()
        .then ((data) => {
            const productoDetallado = data.find((producto) => producto.id === "YaZ56")
            setProducto(productoDetallado)
        })
    }, [])

  return (
    <ItemDetail producto = {producto}/>
  )
}

export default ItemDetailContainer