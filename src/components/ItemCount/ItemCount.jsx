import { useState } from "react"
import "./ItemCount.css"
const ItemCount = ({producto}) => {
    const [count, setCount] = useState(1) 

    const handleClickSum = () => {
        if (count < producto.stock){
            setCount(count +1)
        }
    }
    const handleClickResta = () => {
        if (count > 1){
            setCount(count - 1)
        }
    }
  return (
    <>
    <div className="container-contador">
        <div className="botones-arriba">
        <button onClick={handleClickResta} disabled = {count <= 1} className="resta">-</button>
        <p>{count}</p>
        <button onClick={handleClickSum} disabled = {count >= producto.stock} className="suma">+</button>
        </div>
        <div>
        <button className="agregar">Agregar Producto</button>
        </div>
    </div>
    </>
  )
}

export default ItemCount