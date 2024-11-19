import './App.css'
import NavBar from './components/Navbar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import FormularioDeContacto from "./components/FormularioDeContacto/FormularioDeContacto"
import { CartProvider } from './components/context/CartContext'
import Cart from './components/Cart/Cart'

function App() {

  return (
    <>
    <BrowserRouter>
    <CartProvider>
    <NavBar />
    <Routes>
      <Route path = "/" element = {<ItemListContainer/>} />
      <Route path= '/category/:idCategory' element = {<ItemListContainer/>}/>
      <Route path = '/detail/:idProduct' element = {<ItemDetailContainer/>}/>
      <Route path = '/contact/form' element = {<FormularioDeContacto/>}/>
      <Route path = "/cart" element = {<Cart/>} />
    </Routes>
    </CartProvider>
    </BrowserRouter>
    </>
  )
}

export default App
