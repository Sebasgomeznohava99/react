import Item from './Item.jsx'
const ItemList = ({productos}) => {
  return (
    <>
    {
        productos.map((producto) => {
            return <Item key={producto.id} producto = {producto}/>
        })
    }
    </>
  )
}

export default ItemList