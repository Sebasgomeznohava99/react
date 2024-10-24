import './App.css'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ComponentePadre from './components/ComponentePadre/ComponentePadre'

function App() {

  return (
    <>
    <NavBar />
    <div className='item-list-container'>
    < ComponentePadre />
    </div>
    </>
  )
}

export default App
