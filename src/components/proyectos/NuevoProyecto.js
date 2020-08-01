import React, { Fragment, useState, useContext } from 'react'

import proyectoContex from '../../context/proyectos/proyectoContex'

const NuevoProyecto = () => {

    // Obtener el state del formulario
    const proyectoContext = useContext(proyectoContex)
    const { formulario, errorFormulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectoContext;

    // State para proyectos
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    })

    // Extraer nombre de proyecto 
    const { nombre } = proyecto;

    // Lee el contenido del input
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    // Cuando el usuario envía el proyecto
    const handleSubmitProyecto = e => {
        e.preventDefault();

        // Validar proyecto
        if (nombre === '') {
            mostrarError();
            return;
        }

        // Agregar al proyectoState
        agregarProyecto(proyecto)

        // Reiniciar el form 
        guardarProyecto({
            nombre: ''
        })

    }

    const handleFormulario = () => {
        mostrarFormulario()
    }

    return (
        <Fragment>
            <button
                type="submit"
                className="btn btn-block btn-primario"
                onClick={handleFormulario}
            >Nuevo Proyecto</button>

            {
                formulario ?
                    (
                        <form
                            onSubmit={handleSubmitProyecto}
                            className="formulario-nuevo-proyecto">

                            <input
                                type="text"
                                name="nombre"
                                className="input-text"
                                value={nombre}
                                placeholder="Nombre Proyecto"
                                onChange={onChangeProyecto} />

                            <input
                                type="submit"
                                value="Nuevo Proyecto"
                                className="btn btn-primario btn-block" />
                        </form>
                    )
                    : null }

                {
                    errorFormulario ? <p className="mensaje error">El nombre del proyecto es obligatorio</p>  : null
                }
        </Fragment>
    );
};

export default NuevoProyecto;