import React from 'react'
import Panel from './Panel'
import Sidebar from '../componentes/Sidebar'
import Administrador from './Administrador'

const Layout = () => {
  return (
    <div className='h-screen flex'>
         <Sidebar/>
        <Panel>
          <Administrador/>
        </Panel>
       
    </div>
  )
}

export default Layout