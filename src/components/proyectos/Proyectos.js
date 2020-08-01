import React from 'react'
import Sidebar from '../layouts/Sidebar';
import Nav from '../layouts/Nav';
import FormTarea from '../tareas/FormTarea';
import ListarTareas from '../tareas/ListarTareas';


const Proyectos = () => {
    return (
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <Nav />
                <main>

                    <FormTarea />

                    <div className="contenedor-tareas">
                        <ListarTareas />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Proyectos;