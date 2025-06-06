import { Link, useNavigate, useParams } from 'react-router'
import { useStudents } from '../context/DatosContext';
import { Box, Button, Card, Flex, Text } from '@radix-ui/themes';

const DetailStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getStudentById, deleteStudent } = useStudents();

  const student = getStudentById(id);

  const handleDelete = (studentId) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este estudiante?")) {
      deleteStudent(studentId);
      navigate('/students');
    }
  };

  if (!student) {
    return (
      <Flex direction="column" align="center" gap="4" padding="4">
        <Text as="h1" size="6" weight="bold">
          Estudiante no encontrado
        </Text>
        <Button color="cyan" variant="soft" asChild>
          <Link to="/students">Volver a la lista</Link>
        </Button>
      </Flex>
    )
  }

  return (
    <Flex direction="column" align="center" gap="4" padding="4">
      <Text as="h1" size="6" weight="bold">
        Detalles del Estudiante
      </Text>
      <Box width="350px" marginBottom="4">
        <Card>
          <Flex gap="3" direction="column" padding="4">
            <Box>
              <Text as="p" size="3" weight="bold">
                LU:
              </Text>
              <Text as="p" size="2">
                {student.lu}
              </Text>
            </Box>
            <Box>
              <Text as="p" size="3" weight="bold">
                Nombre:
              </Text>
              <Text as="p" size="2">
                {student.nombre}
              </Text>
            </Box>
            <Box>
              <Text as="p" size="3" weight="bold">
                Apellido:
              </Text>
              <Text as="p" size="2">
                {student.apellido}
              </Text>
            </Box>
            <Box>
              <Text as="p" size="3" weight="bold">
                Curso:
              </Text>
              <Text as="p" size="2">
                {student.curso}
              </Text>
            </Box>
            <Box>
              <Text as="p" size="3" weight="bold">
                Email:
              </Text>
              <Text as="p" size="2">
                {student.email}
              </Text>
            </Box>
            <Box>
              <Text as="p" size="3" weight="bold">
                Teléfono:
              </Text>
              <Text as="p" size="2">
                {student.telefono}
              </Text>
            </Box>
          </Flex>
        </Card>
      </Box>
      <Flex gap="3">
        <Button color="indigo" variant="soft" asChild>
          <Link to={`/students/${student.id}/edit`}>Editar</Link>
        </Button>
        <Button style={{ "cursor": "pointer" }} color="crimson" variant="soft" onClick={() => handleDelete(student.id)}>
          Eliminar
        </Button>
        <Button color="cyan" variant="soft" asChild>
          <Link to="/students">Volver a la lista</Link>
        </Button>
      </Flex>
    </Flex>
  )
}

export default DetailStudent