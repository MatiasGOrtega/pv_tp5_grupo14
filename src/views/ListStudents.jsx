import { Link } from 'react-router-dom'
import { useStudents } from '../context/DatosContext'

const ListStudent = () => {

  const { students } = useStudents()

  return (
    <div>
      <h2>Lista de Alumnos</h2>
      {students.length === 0 ? (
        <p>No hay alumnos registrados.</p>
      ) : (
        <ul>
          {students.map(student => (
            <li key={student.lu}>
              <strong>LU:</strong> {student.lu}
              <strong>Nombre:</strong> {student.nombre} {student.apellido}
              <strong>Curso:</strong> {student.curso}
              <Link to={`/students/${student.id}`}>Ver Detalles</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListStudent