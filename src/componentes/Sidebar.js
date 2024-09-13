import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { HiOutlineUsers } from "react-icons/hi2";
import { BsPersonAdd } from "react-icons/bs";
import { PiGraduationCapLight } from "react-icons/pi";
import { PiChalkboardSimple } from "react-icons/pi";
import { IoIosLogOut } from "react-icons/io";

const listaMenu = [
  {
    titulo: 'Registrar',
    icono:<BsPersonAdd className='h-6 w-6'/>,
    href:''

  },
  {
    titulo: 'Docentes',
    icono:<PiGraduationCapLight className='h-6 w-6'/>,
    href:''

  },
  {
    titulo: 'Alumnos',
    icono:<HiOutlineUsers className='h-6 w-6'/>,
    href:''

  },
  {
    titulo: 'Clases',
    icono:<PiChalkboardSimple className='h-6 w-6'/>,
    href:''

  },
  {
    titulo: 'Cerrar Sesión',
    icono:<IoIosLogOut className='h-6 w-6'/>,
    href:''

  },
]



const Sidebar = () => {
  
 
  return (
    <div className='w-[16%] bg-white border-r border-gray-200'>
    <aside className='fixed top-0 left-0 h-screen pt-14'>
        <div className='h-full pl-6 pb-4 overflow-y-auto '>
            <ul className='space-y-2 font-medium pt-2 w-80'>
            {listaMenu.map((item, index) => (
                       <li key={index}> 
                       <Link to={item.href} className='flex flex-row gap-3 mb-2 py-1 font-semibold text-base text-gray-800 hover:bg-gray-100'>
                        {item.icono}
                       <span>{item.titulo}</span>
                       </Link>
                       </li>
              ))}      
            </ul>
        </div>
    </aside>
    <Outlet/>
    </div>
  )
}

export default Sidebar