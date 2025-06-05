import React from "react";
import { Link } from 'react-router-dom';
import { useDatos } from './DatosContext';

const ListStudents = () => {
 
  const { datos } = useDatos();

  return (
    <div>
      <h2>Listado de Alumnos</h2>
      <ul>
        {datos.map((item) => (
          <li key={item.id}>
            <strong>LU:</strong>APU00{item.lu}<br />
            <strong>Nombre:</strong> {item.nombre}<br />
            <strong>Apellido:</strong> {item.apellido}<br />
            <strong>Curso:</strong> {item.curso}<br />
            <strong>Email:</strong> {item.email}<br />
            <strong>Domicilio:</strong> {item.domicilio}<br />
            <strong>Teléfono:</strong> {item.telefono}
            <hr/>
            <Link to={`/Students/${item.id}`}>Ver Detalles</Link>
            <Link to={`/Students/${item.id}/editar`}>Editar</Link>
            <hr/>
          </li>
        ))}
      </ul>
      <Link to={`/Students/add`}>Volver</Link>
    </div>
  );
};

export default ListStudents