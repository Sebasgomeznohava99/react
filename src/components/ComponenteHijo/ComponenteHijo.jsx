import './ComponenteHijo.css'
const ComponenteHijo = () => {
    return (
        <div >
            <form action="" >
                <select name="prendas" id="opciones" className='dropdown'>
                    <option value=""  selected>Select one...</option>
                    <option value="Pantalones">Pantalones</option>
                    <option value="Camisas">Camisas</option>
                    <option value="Zapatos">Zapatos</option>
                    <option value="Medias">Medias</option>
                    <option value="Billetera">Billetera</option>
                </select>
            </form>

        </div>
    )
}

export default ComponenteHijo    