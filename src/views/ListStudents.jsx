import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


const ListStudent = () => {
  
  const [alumnos, setAlumnos] = useState([{id:"", nombre:"", edad: ""}])

  const eliminarAlumno = (id) => {
    if (confirm('¿Está seguro de eliminar este alumno?')) {
      setAlumnos(alumnos.filter(alumno => alumno.id !== id))
    }
  }

  return (
    <div>
       <h2>Lista de Alumnos</h2>
      <ul>
        {alumnos.map(alumno => (
          <li key={alumno.id}>
            {alumno.nombre} ({alumno.edad} años)
            <Link to={`/alumnos/${alumno.id}`}> Ver Detalles </Link>
            <Link to={`/alumnos/${alumno.id}/editar`}> Editar </Link>
            <button onClick={() => eliminarAlumno(alumno.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListStudent