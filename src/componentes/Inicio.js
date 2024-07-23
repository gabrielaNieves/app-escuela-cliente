import React from 'react'
import encabezado from '../assets/encabezado.jpeg'

function Inicio() {
  return (
        <div style={{
        backgroundImage:`url(${encabezado})`,
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center'
        }}>
            <h1 className='text-white text-5xl font-bold'>SISTEMA DE INSCRIPCIÓN ESTUDIANTIL</h1>
        </div>
        
  )
}

export default Inicio