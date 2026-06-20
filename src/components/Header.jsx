import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {


    return (
        <header>
            <h1>TechStore</h1>
            <nav>
                <ul id="Menu">
                    <li><a href="#productos">Catálogo</a></li>
                    <li><a href="#Ofertas">Ofertas</a></li>
                    <li><a href="login.html">Iniciar sesión</a></li>
                    <li><a href="registro.html">Registrarse</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Login;