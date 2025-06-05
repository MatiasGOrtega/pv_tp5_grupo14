import { createContext, useContext, useState } from 'react';

const DatosContext = createContext();

export function DatosProvider({ children }) {
  const [datos, setDatos] = useState([]);

  const agregarDato = (nuevoDato) => {
    setDatos((prev) => [...prev, { id: Date.now(), ...nuevoDato }]);
  };

  const obtenerEstudianteID = (id) =>{
    return datos.find(dato => dato.id === parseInt(id));

  };

  const editarAlumno = (id,alumno)=>{
    setDatos(datos.map(dato => dato.id === parseInt(id)? {...alumno , id}:dato))
  }

  return (
    <DatosContext.Provider value={{ datos, agregarDato,obtenerEstudianteID,editarAlumno }}>
      {children}
    </DatosContext.Provider>
  );
}

export const useDatos = () => {
  const context = useContext(DatosContext)
  if(!context) {
    throw new Error('useDatos error');
  }
  return context};