import React from 'react'
import { useState } from 'react'

const AddStudent = () => {
  const [student, setStudent] = useState({
    lu: "",
    nombre: "",
    apellido: "",
    curso: "",
    email: "",
    domicilio: "",
    telefono: "",
  });
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
      <button type="submit">Agregar
      </button>
    </form>
    </div>
  );
};

export default AddStudent