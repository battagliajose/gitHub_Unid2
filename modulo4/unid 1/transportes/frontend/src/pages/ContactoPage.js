const Contacto = (props) => {
    return (
        <div>
            <h2 class="contactoTitulo">Dejenos su mensaje o solicitud de reserva!</h2>
            <br/>
            <div class="formContainer">

                <form onsubmit="return false">
                    <label for="">Nombre:</label>
                    <input type="text" placeholder="Ingrese su nombre...." id="nombre"/>
                    <br/><br/>
                    <label for="">Mail:</label>
                    <input type="email" placeholder="Ingrese su mail..." id="mail"/>
                    <br/><br/>
                    <label for="">Telefono:</label>
                    <input type="text" placeholder="Ingrese su telefono..." id="telefono"/>
                    <br/><br/>
                    <label for="">Mensaje:</label>
                    <br/><br/>
                    <textarea cols="30" rows="10" placeholder="Ingrese su mensaje..."></textarea>
                    <br/><br/>
                    <button onclick="enviarContacto();">Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default Contacto;