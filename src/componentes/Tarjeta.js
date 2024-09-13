import React from 'react'

const Tarjeta = ({titulo, totales, icono}) => {
  return (
    <div className='rounded-2xl flex-1 p-4'>
        
<a href='#' className="block max-w-sm px-10 py-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 flex justify-between">
{icono}
<div className='flex flex-col'>
<h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-400">{totales}</h1>
<h1 className="my-1 tracking-tight text-gray-900">{titulo}</h1>
</div>


</a>
    </div>
  )
}

export default Tarjeta

