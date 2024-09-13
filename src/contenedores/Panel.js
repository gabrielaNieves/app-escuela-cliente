import React from 'react'
import Header from '../componentes/Header'



const Panel = ({children}) => {
  return (
    <div className='w-[84%] bg-gray-100'>
    <Header/>
    {children}
   </div>
  )

    
}

export default Panel