import { useState } from "react"
import './ComponentePadre.css'

const ComponentePadre = ({children}) => {
  const [contador, setContador] = useState(0)
  function aumentarContador () {
    if(contador < 10){
    setContador (contador +1);
    }
  }
  function restarContador () {
    if (contador > 0){
    setContador (contador - 1)
    }
  }
  return (
    <>
        <h2>Vamos a hacer el contador!!!!</h2>
        <div className="contenedor-contador">
          <button className="boton-aumento" onClick={restarContador}>
          -
          </button>
          <p className="mostrar-contador">
          {contador}
          </p>
          <button className="boton-resta" onClick={aumentarContador}>
          +
          </button>
          <button className="agregar">
            Agregar al Carrito
          </button>
          { children }
        </div>
    </>
  )
}

export default ComponentePadre