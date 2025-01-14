import React from 'react'
import RegistroForm from './RegistroForm'
import ListaRegistrados from './ListaRegistrados'

const Registro = () => {
  return (
    <div className='flex flex-col'> 
        <RegistroForm />
        <ListaRegistrados/>
    </div>
  )
}

export default Registro
