import { doc, getDoc } from "firebase/firestore"
import db from "../../db/db.js"
import { useState, useEffect } from "react"
import ItemDetail from './ItemDetail.jsx'
import { useParams } from "react-router-dom"
const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({ image: [] })
    const {idProduct} = useParams()

    const getProductById = () => {
      const docRef = doc( db, "products", idProduct )
      getDoc(docRef)
      .then((dataDb) => {
        const productDb = {id: dataDb.id, ...dataDb.data()}
        setTimeout(() => {
          setProducto(productDb);
        }, 1000); 
      })
    }

    useEffect (() => {
      getProductById()
    }, [idProduct])
  return (

<ItemDetail producto = {producto} />
  )
}

export default ItemDetailContainer