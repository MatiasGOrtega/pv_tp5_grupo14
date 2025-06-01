import React from 'react'
import { useState } from 'react'

const AddStudent = (onAdd,onUpdate,editingStudent) => {
  const [student, setStudent] = useState({
    id: "",
    lu: "",
    nombre: "",
    apellido: "",
    curso: "",
    email: "",
    domicilio: "",
    telefono: "",
  });

  const [contadorId, setContadorId] = useState(1);

  useEffect(() => {
    if (editingStudent) {
      setStudent(editingStudent);
    } else {
      setStudent({
        id: "",
        lu: "",
        nombre: "",
        apellido: "",
        curso: "",
        email: "",
        domicilio: "",
        telefono: "",
      });
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    const newStudent = {
      ...student,
      id: +student.id,
      lu: +student.lu,
      nombre: +student.nombre,
      apellido: +student.apellido,
      curso: +student.curso,
      email: +student.email,      
      domicilio: +student.domicilio,
      telefono: +student.telefono,
    };
    if (editingStudent) {
      onUpdate(newStudent);
    } else {
      newStudent.id = contadorId;
      setContadorId((prev) => prev + 1);
      onAdd(newStudent);
    }
    setStudent({
      lu: "",
      nombre: "",
      apellido: "",
      curso: "",
      email: "",
      domicilio: "",
      telefono: "",
    });
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input
        name="lu"
        placeholder="LU"
        value={student.lu}
        onChange={handleChange}
        required
      />
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
      <button type="submit">{editingProduct ? "Actualizar" : "Agregar"}Agregar
      </button>
    </form>
    </div>
  );
};

export default AddStudent