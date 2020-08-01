import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    // State inicio de sesión
    const [ usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    })

    // Extraer de usuario
    const { email, password } = usuario;

    const onChangeSesion = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        // Validaciones

        // Pasar al action
    }

    return (
        <div>
            <div className="form-usuario">
                <div className="contenedor-form sombra-dark">
                    <h1>Iniciar Sesión</h1>

                    <form onSubmit={handleSubmit}>
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
                            <input type="submit" value="Entrar" className="btn btn-primario btn-block" />
                        </div>
                    </form>

                    <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                        Crear Cuenta
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;