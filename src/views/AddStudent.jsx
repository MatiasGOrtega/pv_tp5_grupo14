import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDatos } from './DatosContext';

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

  const { datos,agregarDato,obtenerEstudianteID,editarAlumno } = useDatos();

  const navigate = useNavigate();
  const {id} = useParams();

  const modoEdicion = Boolean(id);

  useEffect(()=>{
    if (modoEdicion){
      const estudianteExistente = obtenerEstudianteID(id);
      if (!estudianteExistente && datos.length>0){
        navigate('/students/add');
      }
      else if(estudianteExistente){
        
        setAlumno(estudianteExistente);
        
        
      }
      
    }
  },[id,modoEdicion,navigate,obtenerEstudianteID,datos]);

  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modoEdicion){
      editarAlumno(id,alumno);
    }
    else{
      agregarDato(alumno);
    }
    navigate("/students");
    
  };

  return (
    <div>
      <h1 >{modoEdicion? "Editar Estudiante":"Agregar Estudiante"}</h1>
      <form onSubmit={handleSubmit}>
      <input
        name="lu"
        placeholder="LU"
        value={student.lu}
        onChange={handleChange}
        required
        disabled={modoEdicion}
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
      <button type="submit">
        {modoEdicion? "Editar":"Agregar"}
      </button>
    </form>
  </div>
  );
};

export default AddStudent