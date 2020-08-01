import React, { useContext, useEffect } from 'react';

import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContex';

const ListarProyecto = () => {

    // Obtener el stage del proyecto
    const proyectoContex = useContext(proyectoContext)
    // Elimine el stage local y agreguue el stage de contex
    const { proyectos, obtenerProyectos } = proyectoContex

    useEffect(() => {
        obtenerProyectos()
    }, []) //eslint-disable-next-line

    if (proyectos.lenght === 0) return null


    return (
        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto
                    key={proyecto.id}
                    proyecto={proyecto} />
            ))}
        </ul>
    );
};

export default ListarProyecto;