import {React, useState, useEffect}from 'react';
import Tarjeta from '../componentes/Tarjeta';
import Inscripciones from '../componentes/Inscripciones';
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
import { obtenerTotales } from '../api/adminService';

const  Administrador = () => {
  const [totales, setTotales] = useState({
    totalEstudiantes: 0,
    totalDocentes: 0,
    totalCursos: 0,
  });

useEffect(() => {
  const fetchTotales = async () => {
    try {
      const data = await obtenerTotales();
      setTotales(data);
    } catch (error) {
      console.error('Error al cargar los totales:', error);
    }
  };
  
  fetchTotales();
}, []);


  return (
    <div  > 
  <div className='flex gap-4 justify-between flex-wrap'>
      <Tarjeta titulo='Docentes' totales={totales.totalDocentes} icono={<FaChalkboardTeacher className='w-10 h-10 order-last'/>}/>
      <Tarjeta titulo='Estudiantes' totales={totales.totalEstudiantes} icono={<PiStudentFill className=' w-10 h-10 order-last'/>}/>
      <Tarjeta titulo='Clases' totales={totales.totalCursos} icono={<SiGoogleclassroom className=' w-10 h-10 order-last' />}/>
    </div>
    <div className='w-full p-3 mx-4'>
        <Inscripciones/>
    </div>
    </div>
  )
}

export default Administrador