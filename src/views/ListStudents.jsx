import { Link } from 'react-router-dom'
import { useStudents } from '../context/DatosContext'
import { Flex, Box, Card, Text, Avatar } from '@radix-ui/themes'

const ListStudent = () => {
  const { students } = useStudents()

  return (
    <div>
      <h2>Lista de Alumnos</h2>
      {students.length === 0 ? (
        <p>No hay alumnos registrados.</p>
      ) : (
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
                    <Box>
                      <Text as="div" weight="bold">
                        {student.nombre} {student.apellido}
                      </Text>
                      <Text as="div" color="gray">
                        <strong>LU:</strong> {student.lu}
                      </Text>
                      <Text as="div" color="gray">
                        <strong>Curso:</strong> {student.curso}
                      </Text>
                      <Link to={`/students/${student.id}`}>
                        Ver Detalles
                      </Link>
                    </Box>
                  </Flex>
                </Card>
              </Box>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
export default ListStudent