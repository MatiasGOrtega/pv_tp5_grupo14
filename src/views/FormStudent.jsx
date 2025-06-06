import { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import FormInput from '../components/FormInput';
import { useStudents } from '../context/DatosContext';

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
    <div>
      <h2>{isEditMode ? 'Editar Estudiante' : 'Añadir Estudiante'}</h2>
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
        <button type="submit">
          {isEditMode ? 'Guardar Cambios' : 'Agregar Estudiante'}
        </button>
        <button
          type="button"
          onClick={() => navigate('/students')}
        >
          Cancelar
        </button>
      </form>
    </div>
  );
}

export default FormStudent