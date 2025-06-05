import { Link, useParams } from 'react-router'
import students from '../data/students.json';

const DetailStudent = () => {
  const { id } = useParams();

  const student = students.find(student => student.id === id);

  if (!student) {
    return <div>Estudiante no encontrado</div>;
  }

  return (
    <div>
      <h2>Detalles del Estudiante</h2>
      <p><strong>LU:</strong> {student.lu}</p>
      <p><strong>Nombre:</strong> {student.nombre}</p>
      <p><strong>Apellido:</strong> {student.apellido}</p>
      <p><strong>Curso:</strong> {student.curso}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Teléfono:</strong> {student.telefono}</p>
      <Link to={`/students/${student.lu}/edit`}>Editar</Link>
      <button onClick={() => {
        if (confirm('¿Está seguro de eliminar este estudiante?')) {
          // Aquí se debería implementar la lógica para eliminar el estudiante
          alert('Estudiante eliminado (simulación)');
        }
      }}>Eliminar</button>
      <Link to="/students">Volver a la lista</Link>
    </div>
  )
}

export default DetailStudent