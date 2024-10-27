import './App.css'
import NavBar from './components/Navbar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path = "/" element = {<ItemListContainer/>} />
      <Route path= '/category/:idCategory' element = {<ItemListContainer/>}/>
      <Route path = '/detail/:idProduct' element = {<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
