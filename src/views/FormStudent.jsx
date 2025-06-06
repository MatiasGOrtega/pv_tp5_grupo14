import { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import FormInput from '../components/FormInput';
import { useStudents } from '../context/DatosContext';
import { Button, Flex, Text, Card } from '@radix-ui/themes';
const defaultStudent = {
  lu: "",
  nombre: "",
  apellido: "",
  curso: "",
  email: "",
  domicilio: "",
  telefono: "",
};

const FormStudent = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const {
    getStudentById,
    addStudent,
    editStudent
  } = useStudents();
  const isEditMode = Boolean(id);

  const [student, setStudent] = useState(defaultStudent);

  useEffect(() => {
    if (isEditMode) {
      const existingStudent = getStudentById(id);
      if (existingStudent) {
        setStudent(existingStudent);
      } else {
        navigate('/students/add', { replace: true });
      }
    } else {
      setStudent(defaultStudent);
    }
  }, [id, isEditMode, navigate, getStudentById]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setStudent(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditMode) {
      alert(`Estudiante ${student.nombre} ${student.apellido} actualizado`);
      editStudent(id, student);
    } else {
      console.log("Añadiendo estudiante:", student);
      alert(`Estudiante ${student.nombre} ${student.apellido} añadido`);
      addStudent({
        ...student,
        id: String(Date.now())
      });
    }

    navigate('/students');
  };

  return (
    <Flex align="center" direction="column">
    <Card size="5" my="5" px="5" py="4" style={{ maxWidth: 400, width: '100%' }}>
      <Flex justify="center"  mb="3">
       <Text size="6" weight="bold" >
        {isEditMode ? 'Editar Estudiante' : 'Añadir Estudiante'}
       </Text>
      </Flex>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="LU"
          name="lu"
          value={student.lu}
          onChange={handleChange}
          disabled={isEditMode}
        />
        <FormInput
          label="Nombre"
          name="nombre"
          value={student.nombre}
          onChange={handleChange}
        />
        <FormInput
          label="Apellido"
          name="apellido"
          value={student.apellido}
          onChange={handleChange}
        />
        <FormInput
          label="Curso"
          name="curso"
          value={student.curso}
          onChange={handleChange}
        />
        <FormInput
          label="Email"
          name="email"
          value={student.email}
          onChange={handleChange}
          type="email"
        />
        <FormInput
          label="Domicilio"
          name="domicilio"
          value={student.domicilio}
          onChange={handleChange}
        />
        <FormInput
          label="Teléfono"
          name="telefono"
          value={student.telefono}
          onChange={handleChange}
          type="tel"
        />
        <Flex gap="5" mt="5" align="center" justify="between">
        <Button type="submit">
          {isEditMode ? 'Guardar Cambios' : 'Agregar Estudiante'}
        </Button>
        <Button variant='ghost'
          type="button"
          onClick={() => navigate('/students')}
        >
          Cancelar
        </Button>
        </Flex>
      </form>
    </Card>
    </Flex>
  );
}

export default FormStudent