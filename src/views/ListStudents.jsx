import { Link } from 'react-router-dom'
import { useStudents } from '../context/DatosContext'
import { Flex, Box, Card, Text, Avatar, Button } from '@radix-ui/themes'

const ListStudent = () => {
  const { students } = useStudents()

  if (students.length === 0) {
    return (
      <Flex
        direction="column"
        align="center"
        justify="center"
        gap="4"
        width="100%"
        height="100dvh"
        style={{
          background: "var(--gray-a2)",
          border: "1px dashed var(--gray-a7)",
        }}>
        <h2>No hay alumnos registrados.</h2>
        <p>Por favor, añade un alumno para comenzar.</p>
        <Link to="/students/add">Añadir Alumno</Link>
      </Flex>
    )
  }

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap="4"
      width="100%"
      style={{
        background: "var(--gray-a2)",
        border: "1px dashed var(--gray-a7)",
      }}>

      <Text size="6" weight="bold" color="indigo" m="3">
        Lista de Alumnos
      </Text>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {students.map(student => (
          <li key={student.lu} style={{ marginBottom: '1rem' }}>
            <Box width="400px">
              <Card size="2">
                <Flex gap="4" align="center">
                  <Avatar
                    size="4"
                    radius="full"
                    fallback={student.nombre.charAt(0)}
                    color="indigo"
                  />
                  <Flex direction="row" align="center" gap="2" width={'100%'}>
                    <Box flex="1" width='100%'>
                      <Text as="div" weight="bold">
                        {student.nombre} {student.apellido}
                      </Text>
                      <Text as="div" color="gray">
                        <strong>LU:</strong> {student.lu}
                      </Text>
                      <Text as="div" color="gray">
                        <strong>Curso:</strong> {student.curso}
                      </Text>
                    </Box>

                    <Button
                      flex="1"
                      size="2"
                      variant="soft"
                      color="indigo"
                      asChild
                    >
                      <Link to={`/students/${student.id}`}>
                        Ver Detalles
                      </Link>
                    </Button>
                  </Flex>
                </Flex>
              </Card>
            </Box>
          </li>
        ))}
      </ul>
    </Flex>
  )
}
export default ListStudent