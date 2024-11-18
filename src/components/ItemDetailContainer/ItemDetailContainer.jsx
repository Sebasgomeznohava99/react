import { getProducts } from "../../data/data.js"
import { useState, useEffect } from "react"
import ItemDetail from './ItemDetail.jsx'
import { useParams } from "react-router-dom"
import { FaLess } from "react-icons/fa6"
const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const {idProduct} = useParams()
    useEffect (() => {
      setLoading(true)
        getProducts()
        .then ((data) => {
            const productoDetallado = data.find((producto) => producto.id === idProduct)
            setProducto(productoDetallado)
        })
        .finally (() => setLoading(false))
    }, [idProduct])

  return (
    <>
    {
      loading === true ? (<div><h1>Loading...</h1></div>) :  <ItemDetail producto = {producto} />
    }
  
    </>
  )
}

export default ItemDetailContainer