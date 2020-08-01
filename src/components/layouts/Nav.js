import React from 'react';

const Nav = () => {
    return (
        <header className="app-header">
            <p className="nombre-usuario">
                <span>Andrés Hernández</span>
            </p>
            <nav className="nav-principal">
                <a href="#!">Cerrar sesión</a>
            </nav>
        </header>
    );
};

export default Nav;