import { Link, useParams } from 'react-router'
import { useStudents } from '../context/DatosContext';
import { Button, Flex } from '@radix-ui/themes';

const DetailStudent = () => {
  const { id } = useParams();

  const { getStudentById, deleteStudent } = useStudents();

  const student = getStudentById(id);

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
      <Flex gap="3">
        <Button color="indigo" variant="soft">
          <Link to={`/students/${student.id}/edit`}>Editar</Link>
        </Button>
        <Button color="crimson" variant="soft" onClick={() => deleteStudent(student.id)}>
          Eliminar
        </Button>
        <Button color="cyan" variant="soft">
          <Link to="/students">Volver a la lista</Link>
        </Button>
      </Flex>
    </div>
  )
}

export default DetailStudent