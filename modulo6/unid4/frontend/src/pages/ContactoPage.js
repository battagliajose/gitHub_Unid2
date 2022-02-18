
import { useState } from 'react';
import axios from 'axios';

import '../styles/components/pages/ContactoPage.css'

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if(response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <div className="mainDiv">
            <h2 className="contactoTitulo">Dejenos su mensaje o solicitud de reserva!</h2>
            <br/>
            <div className="formContainer">

                <form action="/contacto" method="post" onSubmit={handleSubmit} >
                    <label for="">Nombre:</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Ingrese su nombre...."/>
                    <br/><br/>
                    <label for="">Mail:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Ingrese su mail..."/>
                    <br/><br/>
                    <label for="">Telefono:</label>
                    <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Ingrese su telefono..."/>
                    <br/><br/>
                    <label for="">Mensaje:</label>
                    <br/><br/>
                    <textarea cols="30" rows="10" name="mensaje" value={formData.mensaje} onChange={handleChange} placeholder="Ingrese su mensaje..."></textarea>
                    <br/><br/>
                    <p className='centrar'><input type="submit" value="Enviar"/></p>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
                </form>

            </div>
        </div>
    );
}

export default ContactoPage;