import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const ListStudent = () => {

  const navigate = useNavigate()
  const [alumnos, setAlumnos] = useState([])
  
  const eliminarAlumno = (lu) => {
    if (confirm('¿Está seguro de eliminar este alumno?')) {
      setAlumnos(alumnos.filter(alumno => alumno.lu !== lu))
    }
  }

  return (
    <div>
    <h2>Lista de Alumnos</h2>
      {alumnos.length === 0 ? (
        <p>No hay alumnos registrados.</p>
      ) : (
      <ul>
        {alumnos.map(alumno => (
          <li key={alumno.lu}>
                <strong>LU:</strong> {alumno.lu} 
                <strong>Nombre:</strong> {alumno.nombre} {alumno.apellido} 
                <strong>Curso:</strong> {alumno.curso}
                <button onClick={() => navigate(`/students/${alumno.lu}/edit`)} >Editar</button>
                <button onClick={() => eliminarAlumno(alumno.lu)} >Eliminar</button>
                <button onClick={() => navigate(`/students/${alumno.lu}`)} >Ver Detalles</button>
          </li>
        ))}
      </ul>
      )}  
    </div>
  )
}

export default ListStudent