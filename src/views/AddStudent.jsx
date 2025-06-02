import React from 'react'
import { useState } from 'react'
import ListStudents from './ListStudents';

const AddStudent = () => {
  const [student, setStudent] = useState({
    nombre: "",
    apellido: "",
    curso: "",
    email: "",
    domicilio: "",
    telefono: "",
  });

  
  const [students, setStudents] = useState([]);

  const [countLU, setCountLU] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      lu: countLU,
      ...student
    };
    setStudents((prev) => [...prev, newStudent]);
    setCountLU((prev) => prev + 1);
     setStudent({
      nombre: "",
      apellido: "",
      curso: "",
      email: "",
      domicilio: "",
      telefono: "",
    });

    
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input
        name="nombre"
        placeholder="Nombre"
        value={student.nombre}
        onChange={handleChange}
        required
      />
      <input
        name="apellido"
        placeholder="Apellido"
        value={student.apellido}
        onChange={handleChange}
        required
      />
      <input
        name="curso"
        placeholder="Curso"
        value={student.curso}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        placeholder="E-mail"
        value={student.email}
        onChange={handleChange}
        required
      />
      <input
        name="domicilio"
        placeholder="Domicilio"
        value={student.domicilio}
        onChange={handleChange}
        required
      />
      <input
        name="telefono"
        placeholder="Telefono"
        value={student.telefono}
        onChange={handleChange}
        required
      />
      <button type="submit">Agregar
      </button>
    </form>
    <ListStudents students={students} />
    </div>
  );
};

export default AddStudent