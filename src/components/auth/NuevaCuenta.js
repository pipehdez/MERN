import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NuevaCuenta = () => {
    // State inicio de sesión
    const [ usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    })

    // Extraer de usuario
    const { nombre, email, password, confirmar } = usuario;

    const onChangeSesion = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        // Validaciones

        // Password minimo 6 caracteres

        // Los 2 password son iguales

        // Pasar al action
    }

    return (
        <div>
            <div className="form-usuario">
                <div className="contenedor-form sombra-dark">
                    <h1>Crear Cuenta</h1>

                    <form onSubmit={handleSubmit}>
                        
                    <div className="campo-form">
                            <label htmlFor="nombre">Nombre</label>
                            <input
                                type="text"
                                name="nombre"
                                id="nombre"
                                value={nombre}
                                placeholder="Tu nombre"
                                onChange={onChangeSesion} />
                        </div>

                        <div className="campo-form">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                placeholder="Tu email"
                                onChange={onChangeSesion} />
                        </div>

                        <div className="campo-form">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                placeholder="Tu password"
                                onChange={onChangeSesion} />
                        </div>

                        <div className="campo-form">
                            <label htmlFor="comfirmar">Confirmar Password</label>
                            <input
                                type="password"
                                name="confirmar"
                                id="confirmar"
                                value={confirmar}
                                placeholder="Tu confirmar password"
                                onChange={onChangeSesion} />
                        </div>

                        <div className="campo-form">
                            <input type="submit" value="Entrar" className="btn btn-primario btn-block" />
                        </div>
                    </form>

                    <Link to={'/'} className="enlace-cuenta">
                        Iniciar Sesión
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NuevaCuenta;