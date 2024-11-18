import { useState } from "react"

const FormularioDeContacto = () => {
    const [name, setName] = useState ("")
    const [email, setEmail] = useState ("")
    const [address, setAddress] = useState ("")
    const [phone, setPhone] = useState ("")
    const [historial, setHistorial]= useState ([])

    const handleNameChanges = (event) => {
      setName(event.target.value)
    }
    const handleEmailChanges = (event) => {
      setEmail(event.target.value)
    }
    const handleAddressChange = (event) => {
      setAddress(event.target.value)
    }
    const handleNumberChange = (event) => {
      setPhone(event.target.value)
    }
    const handleHistorial = (event) => {
      event.preventDefault()
      const user = {name, email, address, phone}
      setHistorial([...historial, user])
      console.log([...historial, user]);
        }
  return (
    <>
    <form>
      <label>Nombre</label>
      <input type="text" onChange= {handleNameChanges} value={name}/>
      <label>Email</label>
      <input type="email" onChange= {handleEmailChanges} value={email}/>
      <label>Dirección</label>
      <input type="text" onChange={handleAddressChange} value={address} />
      <label>Número de Telefono</label>
      <input type="number" onChange={handleNumberChange} value={phone}/>
      <button onClick={handleHistorial} type="submit">Submit</button>
    </form>
    <div>
      <h3>Historial</h3>
      <ol>
        {
          historial.map((historia, index) => (
            <li key={index}>
              {historia.name} - {historia.email} - {historia.address} - {historia.phone}
            </li>
          ))
        }
      </ol>
    </div>
    </>
  )
}

export default FormularioDeContacto