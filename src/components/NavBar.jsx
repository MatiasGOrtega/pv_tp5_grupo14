import { memo } from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = memo(() => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" end>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/students">Alumnos</NavLink>
                </li>
                <li>
                    <NavLink to="/students/add">Añadir Alumno</NavLink>
                </li>
                <li>
                    <NavLink to="/about">Acerca de</NavLink>
                </li>
            </ul>
        </nav>
    );
});

export default NavBar;
