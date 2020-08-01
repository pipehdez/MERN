import React, { useReducer } from 'react'
import proyectoContext from './proyectoContex'
import proyectoReducer from './proyectoReducer'
import { v4 as uuidv4 } from 'uuid';

import { 
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS ,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO
} from '../../types'

const ProyectoState = props => {

    const proyectos = [
        { id: 1, nombre: 'Tienda virtual' },
        { id: 2, nombre: 'Internet' },
        { id: 3, nombre: 'Diseño de sitio web' },
        { id: 4, nombre: 'MERN' }
    ]

    const initialState = {
        proyectos: [],
        formulario: false,
        errorFormulario: false
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    // Serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // Obtener los proyectos
    const obtenerProyectos = () =>{
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    // Agregar nuevo proyecto
    const agregarProyecto = proyecto => {
        proyecto.id = uuidv4()

        // Agregar el proyecto al state con el disptch
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })
    }

    // Validar formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorFormulario: state.errorFormulario,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError
            }} >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState