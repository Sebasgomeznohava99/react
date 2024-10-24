import { useState } from "react";
import './Contador.css';


const Contador = ({ stock, nombre }) => {
    const [contador, setContador] = useState(1);
    const [inicialstock, setStock] = useState(stock);

const aumentarContador = () => {
    if (contador < inicialstock) {
    setContador(contador + 1);
    }
    };

const restarContador = () => {
    if (contador > 1) {
    setContador(contador - 1);
    }
};

const agregarProducto = () =>{
    if(inicialstock >= contador){
        setStock(inicialstock - contador);
        alert(`Has agregado el producto con exito!!!
Agregaste ${contador} ${nombre}`);
setContador (1);
    }
}
return (
<div>
    <div className="contenedor-contador">
        <div className="botones-superiores">
        <button onClick={restarContador} className="restar" disabled = {inicialstock === 0}>
        -
        </button>
        <p className="contador-view">{contador}</p>
        <button onClick={aumentarContador} className="sumar" disabled = {contador >= inicialstock}>
        +
        </button>
        </div>
        <div className="botones-inferiores">
        <button className="agregar-producto" onClick={agregarProducto} disabled = {inicialstock === 0}>
        Agregar Producto
        </button>
        {inicialstock === 0 && <p className="out">No se pueden agregar más productos porque ya no hay más stock</p>}
        </div>
    </div>
</div>
  )
}

export default Contador