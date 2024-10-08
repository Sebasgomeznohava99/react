import './App.css'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import gif from "../src/assets/giphy.webp"
import ComponentePadre from './components/ComponentePadre/ComponentePadre'
import ComponenteHijo from './components/ComponenteHijo/ComponenteHijo'

function App() {

  return (
    <>
    <NavBar />
    <div className='item-list-container'>
      < ItemListContainer saludo = {`Bienvenidos a mi Ecommerce.`}/>
      < ItemListContainer saludo = {`Este es para la clase de React.`}/>
      < ItemListContainer saludo = {`Eso es to, eso es to, eso es to, eso es todo amigos!!!`}/>
    </div>
    <div className='contenedor-gif'>
    <img src = {gif} alt="" className='porky'/>
    </div>
    <ComponentePadre />
    </>
  )
}

export default App
