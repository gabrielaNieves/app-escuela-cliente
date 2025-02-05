import React from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { CerrarSesion } from '../api/usuarioService'; 
import { HiOutlineUsers } from "react-icons/hi2";
import { BsPersonAdd } from "react-icons/bs";
import { PiGraduationCapLight } from "react-icons/pi";
import { PiChalkboardSimple } from "react-icons/pi";
import { IoIosLogOut } from "react-icons/io";
import { RiFileList3Line } from "react-icons/ri";
import logo from "../assets/logo.png"


const listaMenu = [
  {
    titulo: 'Registrar',
    icono:<BsPersonAdd className='h-6 w-6'/>,
    href:'registro'

  },
  {
    titulo: 'Docentes',
    icono:<PiGraduationCapLight className='h-6 w-6'/>,
    href:'docentes'

  },
  {
    titulo: 'Estudiantes',
    icono:<HiOutlineUsers className='h-6 w-6'/>,
    href:'alumnos'

  },
  {
    titulo: 'Secciones',
    icono:<PiChalkboardSimple className='h-6 w-6'/>,
    href:'cursos'

  },
  {
    titulo: 'Inscripciones',
    icono:<RiFileList3Line className='h-6 w-6'/>,
    href:'inscripciones'

  },
]



const Sidebar = () => {
const navigate = useNavigate();
const cerrarSesion = CerrarSesion();

const handleSession = async () => {
  await cerrarSesion();
  navigate('/ingresar');
}
 
  return (
    <div className='w-[18%] bg-white border-r border-gray-200 overflow-y-auto'>
    <aside className='fixed top-0 left-0 h-screen pt-4'>   
        <Link to='/admin'>
                <img className="h-14 w-14 pl-4 pb-2 inline" src={logo} alt="logo"/>
                <h3 className='font-sm text-slate-800 inline-block pl-1'>Raimundo Pernalete</h3>
        </Link>
        <div className='h-full pl-6 pb-4 overflow-y-auto'>
            <ul className='space-y-2 font-medium pt-2 w-44'>
            {listaMenu.map((item, index) => (
                       <li key={index}> 
                       <Link to={item.href} className='flex flex-row gap-3 mb-2 py-1 font-semibold text-base text-gray-800 hover:bg-gray-100 overflow-x-hidden'>
                        {item.icono}
                       <span>{item.titulo}</span>
                       </Link>
                       </li>
              ))}
                      <li><button className='flex flex-row gap-3 mb-2 py-1 font-semibold text-base text-gray-800 hover:bg-gray-100 overflow-x-hidden' onClick={handleSession}>
                      <IoIosLogOut className='h-6 w-6'/>
                      <span>Cerrar Sesión</span>
                      </button></li>    
            </ul>
        </div>
    </aside>
    <Outlet/>
    </div>
  )
}

export default Sidebar