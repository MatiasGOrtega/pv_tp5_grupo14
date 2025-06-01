import { Link } from 'react-router-dom'

const NavBar = () => (
    <nav>
        <Link to="/">Inicio</Link>
        <Link to="/alumnos">Lista de Alumnos</Link>
        <Link to="/alumnos/nuevo">Nuevo Alumno</Link>
        <Link to="/about">Acerca de</Link>
    </nav>
);

export default NavBar;
