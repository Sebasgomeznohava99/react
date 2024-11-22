import { useState } from "react"
import FormCheckout from "./FormCheckout"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Timestamp, addDoc, collection } from "firebase/firestore"
import db from "../../db/db"
import { Link } from "react-router-dom"

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname : "",
        phone: "",
        email: ""
    })

    const [idOrder, setIdOrder] = useState(null)

    const { cart, totalPrice, deleteCart } = useContext(CartContext)
    
    const handleChangeInput = (event) => {
        setDataForm({
            ...dataForm, [event.target.name]: event.target.value
            })
        event.target.value //El valor el input 
        event.target.name //El valor de la propiedad name para poder que sepa a que aplicarle el .value
    }

    const handleSubmitForm = (event) => {
        event.preventDefault();

        const order = {
            buyer: { ...dataForm },
            products: [ ...cart ],
            date: Timestamp.fromDate(new Date() ),
            price: totalPrice()
            
        }
        uploadOrder(order);
    }



const uploadOrder = (newOrder) => {
    const ordersRef = collection(db, "orders")
    addDoc(ordersRef, newOrder)
    .then((response) =>  setIdOrder(response.id) )
    .catch((error) => console.log(error))
    .finally(() => {
        //Cuando Finalizamos la orden, borremos la orden del carrito
        deleteCart()
    })
}

return (
    <div>
        {
            idOrder === null ? (
                <FormCheckout dataForm = {dataForm}
                handleChangeInput={handleChangeInput}
                handleSubmitForm= {handleSubmitForm}/>
            ) : (
                <div>
                    <h1>Muchas Gracias por su Compra 🔝❤️</h1>
                    <p>El ID de su orden es: {idOrder}</p>
                    <Link to = "/">Volver al Inicio</Link>
                </div>
            )
        }
        
    </div>
 )
}

export default Checkout