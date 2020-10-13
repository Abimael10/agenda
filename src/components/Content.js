import React, {useState} from 'react';
import Form from './Form'
import Lista from './Lista'

const Content = () => {

    const [listas, crearListas] = useState([])

    const crearLista = lista => {
      crearListas([...listas, lista])
    }

    const estado = listas.length === 0 ? 'No hay ningún evento' : 'Administración de eventos';

    const eliminarEvento = id => {
      const removerEvento = listas.filter(lista => lista.id !== id)
      crearListas(removerEvento)
    }

    return ( 
        <div className="inside">
          <Form
            crearLista={crearLista}
          />
          <div className="form-all">
            <h2 className="text-center mb-lg">{estado}</h2>
            {listas.map(lista => (
                <Lista
                    key={lista.id}
                    lista={lista}
                    eliminarEvento={eliminarEvento}
                />
            ))}
          </div>
        </div>
    );
}
 
export default Content;