import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/NavBar'  
import Home from './views/Home'
import ListStudents from './views/ListStudents'
import AddStudent from './views/AddStudent'
import EditStudent from './views/EditStudent'
import DetailStudent from './views/DetailStudent'
import NotFound from './views/NotFound'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<ListStudents />} />
        <Route path="/students/add" element={<AddStudent />} />
        <Route path="/students/:id/edit" element={<EditStudent />} />
        <Route path="/students/:id" element={<DetailStudent />} />
      </Routes>
    </>
  )
}

export default App
