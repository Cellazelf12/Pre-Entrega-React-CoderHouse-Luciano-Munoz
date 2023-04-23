import { useState } from "react"
import "./ContactForm.css"

const ContactForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = () => {
        const userData = {
            name, phone, email
        }


        onConfirm(userData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name-input">Nombre Completo</label>
            <input id="name-input" className="form-input" value={name} onChange={(e) => setName(e.target.value)} />

            <label htmlFor="phone" className="form-label">Teléfono</label>
            <input id="phone" className="form-input" value={phone} onChange={(e) => setPhone(e.target.value)} />

            <label htmlFor="email" className="form-label">Email</label>
            <input id="email" className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} />

            <button>Generar orden</button>
        </form>
    )
}

export default ContactForm