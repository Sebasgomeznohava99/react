import { useState, useEffect } from "react"
import { getProducts } from "../../data/data.js"
import './ItemListContainer.css'
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"

function ItemListContainer() {
    const [productos, setProductos] = useState([])
    const { idCategory } = useParams()
    useEffect ( () => {
        getProducts()
        .then ((data) => {
            if(idCategory){
                const filterProducts = data.filter( (producto) => {
            return producto.category === idCategory
            })
            setProductos(filterProducts)
            } else {
                setProductos(data)
            }
            
        })
        .catch ((error) => {
            console.error(error)
        })
        .finally (() => {
            console.log('Finalizó la promesa')
        })
    }, [idCategory])

return (
    <>
    <div className="cards-productos">
        <ItemList productos = {productos}/>
    </div>
        
    </>
)
}

export default ItemListContainer