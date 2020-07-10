import React, {useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';


const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {


    const [ error, guardarError] = useState(false);

    // Extraer ciudad y pais
    const { ciudad, pais} = busqueda;

    // Funcion que coloca los elementos en el state
    const handleChange = e => {
        // Actualizar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }

    // Cuando el usuario da submit al form
    const handleSubmit = e => {
        e.preventDefault();

        // validar
        if(ciudad.trim() === '' || pais.trim() === ''){
            guardarError(true);
            return;
        }

        guardarError(false);

        guardarConsultar(true);

        // pasar al componente principal
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error mensaje="Ambos campos son obligatorios" /> : null}

            <div className="input-field col s12">
                <input 
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione un pais --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">Pais: </label>
            </div>
            <div className="input-field col s12">
                <input 
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>

      );
}

Formulario.proTypes = {
    busqueda: PropTypes.string.isRequired,
    guardarBusqueda: PropTypes.func.isRequired,
    guardarConsultar: PropTypes.func.isRequired
}
 
export default Formulario;