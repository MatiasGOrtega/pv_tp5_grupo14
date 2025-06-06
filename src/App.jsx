import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/NavBar'
import Home from './views/Home'
import ListStudents from './views/ListStudents'
import DetailStudent from './views/DetailStudent'
import NotFound from './views/NotFound'
import About from './views/About'
import FormStudent from './views/FormStudent'
import { StudentProvider } from './context/DatosContext'

function App() {
  return (
    <>
      <Navbar />
      <StudentProvider>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<ListStudents />} />
          <Route path="/students/add" element={<FormStudent />} />
          <Route path="/students/:id/edit" element={<FormStudent />} />
          <Route path="/students/:id" element={<DetailStudent />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </StudentProvider>
    </>
  )
}

export default App
