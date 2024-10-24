import { useState, useEffect } from "react"
import { getProducts } from "../../data/data.js"
import './ItemListContainer.css'
import ItemList from "./ItemList.jsx"
function ItemListContainer() {
    const [productos, setProductos] = useState([])
    useEffect ( () => {
        getProducts()
        .then ((data) => {
            setProductos(data)
        })
        .catch ((error) => {
            console.error(error)
        })
        .finally (() => {
            console.log('Finalizó la promesa')
        })
    }, [])

return (
    <>
        <ItemList productos = {productos}/>
    </>
)
}

export default ItemListContainer