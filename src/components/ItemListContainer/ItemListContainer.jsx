import { useState, useEffect } from "react"
import './ItemListContainer.css'
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"
import { collection, getDoc, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db.js"

function ItemListContainer() {
    const [productos, setProductos] = useState([])
    const { idCategory } = useParams() 

    const getProducts = () => {
        const productsRef = collection ( db, "products" )
        getDocs(productsRef)
        .then((dataDb) => {
            const productsDb = dataDb.docs.map((productDb) => {
                return { id: productDb.id, ...productDb.data() }
            })
            setProductos(productsDb)
        })
    }

    const getProductsByCategory =  () => {
        const productsRef = collection(db, "products")
        const queryCategories = query( productsRef, where("category", "==", idCategory) )
        getDocs(queryCategories)
        .then((dataDb) => {
            const producstDb = dataDb.docs.map ((producDb) => {
                return { id: producDb.id, ...producDb.data() }
            })
            setProductos(producstDb)
        })
    }

    useEffect ( () => {
        if(idCategory){
            getProductsByCategory()
        } else {
            getProducts()
        }
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