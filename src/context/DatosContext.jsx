import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import studentsData from '../data/students.json';

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(studentsData);

  const addStudent = useCallback((newStudent) => {
    setStudents([...students, newStudent]);
  }, [students]);

  const editStudent = useCallback((id, updatedStudent) => {
    setStudents(students.map(student =>
      student.id === id ? { ...updatedStudent, id } : student
    ));
  }, [students]);

  const deleteStudent = useCallback((id) => {
    setStudents(students.filter(student => student.id !== id));
  }, [students]);

  const getStudentById = useCallback((id) => {
    return students.find(student => student.id === id);
  }, [students]);

  return (
    <StudentContext.Provider
      value={useMemo(() => ({
        students,
        addStudent,
        editStudent,
        deleteStudent,
        getStudentById
      }
      ), [students, addStudent, editStudent, deleteStudent, getStudentById])}
    >
      {children}
    </StudentContext.Provider>
  );
};

export const useStudents = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error('useStudents debe usarse dentro de un StudentProvider');
  }
  return context;
};