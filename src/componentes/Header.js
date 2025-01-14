import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import useAuth from '../hooks/useAuth';



const Header = () => {
  const { auth } = useAuth();
  return (
    <header className='flex items-center justify-end p-3 bg-blue-700 border-b border-blue-200'>
      <div className='px-6 pl-4'>
      <div className='flex items-center '>
        <div className='flex '>
          <span className='md-24 text-medium text-white font-semibold px-3 py-2'>
              {auth?.usuario}
          </span>
        <button className='text-3xl text-white' >
          <FaUserCircle/>
        </button>
        </div>
      </div>
      </div>
      </header>
  )
}

export default Header