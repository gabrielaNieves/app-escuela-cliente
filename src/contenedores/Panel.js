import React from 'react'
import Header from '../componentes/Header'



const Panel = ({children}) => {
  return (
    <div className='w-full'>
    <Header/>
    {children}
   </div>
  )

    
}

export default Panel