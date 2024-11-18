import { useState } from "react"

const FormularioDeContacto = () => {
    const [name, setName] = useState ("")
    const [email, setEmail] = useState ("")
    const [address, setAddress] = useState ("")
    const [phone, setPhone] = useState ("")
  return (
    <div>FormularioDeContacto</div>
  )
}

export default FormularioDeContacto