import React from 'react';
import Tarjeta from '../componentes/Tarjeta';

import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
import Inscripciones from '../componentes/Inscripciones';

const  Administrador = () => {
  return (
    <div className='w-[85%] p-3 mt-3 mx-4'> 
    <div className='flex gap-4 justify-between flex-wrap'>
      <Tarjeta titulo='Docentes' totales={5} icono={<FaChalkboardTeacher className='w-10 h-10 order-last'/>}/>
      <Tarjeta titulo='Estudiantes' totales={20} icono={<PiStudentFill className=' w-10 h-10 order-last'/>}/>
      <Tarjeta titulo='Clases' totales={5} icono={<SiGoogleclassroom className=' w-10 h-10 order-last' />}/>
    </div>
    <div className='w-full p-3 mx-4'>
        <Inscripciones/>
    </div>
    
    </div>
  )
}

export default Administrador