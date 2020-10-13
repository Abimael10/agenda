import React, {useState} from 'react'
import shortid from 'shortid'

const Form = ({crearLista}) => {

    const [agenda, manageEvent] = useState({
        evento: '',
        fecha: '',
        hora: '',
        detalles: ''
    })

    const [error, manageError] = useState(false)

    const handleChange = e => {
        manageEvent({ ...agenda, [e.target.name]: e.target.value })
    }

    //Destruct
    const {evento, fecha, hora, detalles} = agenda;

    const submitEvent = e => {
        e.preventDefault()

        //Validation
        if(evento.trim() === '' || fecha.trim() === '' || hora.trim() === '' || detalles.trim() === '') {
            manageError(true)
            return
        } else {
            manageError(false)
        }

        //ID
        agenda.id = shortid()

        //Create event
        crearLista(agenda)

        //Reset form
        manageEvent({
            evento: '',
            fecha: '',
            hora: '',
            detalles: ''
        })
    }

    return (
        <div className="form-all">
            <h2 className="text-center mb-lg">Crear evento</h2>

            { error ? <p className="error-promt">No debe haber campos vacíos.</p> : null}

            <form>
                <label>Nombre del evento</label>
                <input 
                    type="text"
                    name="evento"
                    className="field-lg field-form mb-sm"
                    onChange={handleChange}
                    value={evento}
                />
                
                <div className="together">
                    <label className="mr-sm">Fecha</label>
                    <input 
                        type="date"
                        name="fecha"
                        className="field-form field-lg mr-sm mb-sm"
                        onChange={handleChange}
                        value={fecha}
                    />

                    <label className="mr-sm">Hora</label>
                    <input 
                        type="time"
                        name="hora"
                        className="field-form field-lg mb-sm"
                        onChange={handleChange}
                        value={hora}
                    />
                </div>

                <label>Detalles del evento</label>
                <textarea
                    className="field-lg field-form mb-sm"
                    name="detalles"
                    onChange={handleChange}
                    value={detalles}
                ></textarea>

                <button
                    type="submit"
                    className="text-center btn"
                    onClick={submitEvent}
                >Guardar</button>
                
            </form>
        </div>
    );
}
 
export default Form;