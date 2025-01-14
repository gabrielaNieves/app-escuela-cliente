import React from 'react'
import Panel from './Panel'
import Sidebar from '../componentes/Sidebar'
import Administrador from './Administrador'
import { Routes, Route } from "react-router-dom";
import EstudianteList from '../componentes/EstudianteList';
import EstudianteForm from '../componentes/EstudianteForm';
import DocenteForm from '../componentes/DocenteForm';
import DocenteList from '../componentes/DocenteList';
import CursoList from '../componentes/CursoList';
import CursoForm from '../componentes/CursoForm';
import InscripcionesList from '../componentes/InscripcionesList';
import InscripcionForm from '../componentes/InscripcionForm';
import Registro from '../componentes/Registro';

const Layout = () => {
  return (
    <div className='flex h-full bg-gray-100 overflow-hidden'>
         <Sidebar/>
        <Panel>
        <div className='w-[84%] p-3 mt-3 mx-4 h-screen overflow-y-auto overflow-x-hidden'>
        <Routes>
          <Route path='/' element={<Administrador/>}/>
          <Route  path='/alumnos' element={<EstudianteList/>}/>
          <Route  path='/alumnos/edicion/:id' element={<EstudianteForm/>}/>
          <Route  path='/alumnos/registro' element={<EstudianteForm/>}/>
          <Route  path='/docentes' element={<DocenteList/>}/>
          <Route  path='/docentes/edicion/:id' element={<DocenteForm/>}/>
          <Route  path='/docentes/registro' element={<DocenteForm/>}/>
          <Route  path='/cursos' element={<CursoList/>}/>
          <Route  path='/cursos/edicion/:id' element={<CursoForm/>}/>
          <Route  path='/cursos/crear' element={<CursoForm/>}/>
          <Route  path='/inscripciones' element={<InscripcionesList/>}/>
          <Route  path='/inscripciones/edicion/:id' element={<InscripcionForm/>}/>
          <Route  path='/inscripciones/crear' element={<InscripcionForm/>}/>
          <Route path='/registro' element={<Registro/>}/>
        </Routes>
        </div>
        </Panel>
    </div>
  )
}

export default Layout