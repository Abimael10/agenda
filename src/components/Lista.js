import React from 'react'

const Lista = ({lista, eliminarEvento}) => (
    <div className="lista">
        <p>Nombre del evento: <span>{lista.evento}</span></p>
        <p>Fecha: <span>{lista.fecha}</span></p>
        <p>Hora: <span>{lista.hora}</span></p>
        <p>Detalles: <span>{lista.detalles}</span></p>

        <button
            className="btn"
            onClick={() => eliminarEvento(lista.id)}
        >Eliminar &times;</button>
    </div>
)
 
export default Lista;