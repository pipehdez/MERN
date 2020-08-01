import React from 'react';
import NuevoProyecto from '../proyectos/NuevoProyecto';
import ListarProyecto from '../proyectos/ListarProyecto';

const Sidebar = () => {
    return (
        <aside>
            <h1>MERN<span>Stack</span></h1>

            <NuevoProyecto />

            <div className="proyectos">
                <h2>Tus proyectos</h2>
                <ListarProyecto />
            </div>
        </aside>
    );
};

export default Sidebar;