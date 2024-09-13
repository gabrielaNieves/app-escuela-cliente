import React from 'react'

const Inscripciones = () => {
  return (
    <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden  border border-gray-200 shadow rounded-lg bg-white ">
        <h1 className='text-lg font-semibold pl-3 my-2'>Inscripciones</h1>
        <table
          className="min-w-full bg-white rounded-md text-left text-sm font-light text-surface border-t dark:text-white">
          <thead
            className="border-b border-neutral-200 font-medium dark:border-white/10">
            <tr>
            <th scope="col" className="px-6 py-4">Fecha</th>
              <th scope="col" className="px-6 py-4">Nombre</th>
              <th scope="col" className="px-6 py-4">Apellido</th>
              <th scope="col" className="px-6 py-4">Cedula</th>
              <th scope="col" className="px-6 py-4">Clase</th>
            </tr>
          </thead>
          <tbody>
            <tr
              className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
              <td className="whitespace-nowrap px-6 py-4 font-medium">4/9/2024</td>
              <td className="whitespace-nowrap px-6 py-4">Pedro</td>
              <td className="whitespace-nowrap px-6 py-4">Vazquez</td>
              <td className="whitespace-nowrap px-6 py-4">36.800.767</td>
              <td className="whitespace-nowrap px-6 py-4">1ro A</td>
            </tr>
            <tr
              className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
              <td className="whitespace-nowrap px-6 py-4 font-medium">5/9/2024</td>
              <td className="whitespace-nowrap px-6 py-4">Laura</td>
              <td className="whitespace-nowrap px-6 py-4">Perez</td>
              <td className="whitespace-nowrap px-6 py-4">36.320.655</td>
              <td className="whitespace-nowrap px-6 py-4">1ro A</td>
            </tr>
            <tr
              className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
              <td className="whitespace-nowrap px-6 py-4 font-medium">6/9/2024</td>
              <td className="whitespace-nowrap px-6 py-4">José</td>
              <td className="whitespace-nowrap px-6 py-4">Alvarez</td>
              <td className="whitespace-nowrap px-6 py-4">36.130.438</td>
              <td className="whitespace-nowrap px-6 py-4">1ro A</td>
            </tr>
            <tr
              className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
              <td className="whitespace-nowrap px-6 py-4 font-medium">6/9/2024</td>
              <td className="whitespace-nowrap px-6 py-4">Paula</td>
              <td className="whitespace-nowrap px-6 py-4">Sanchez</td>
              <td className="whitespace-nowrap px-6 py-4">35.967.038</td>
              <td className="whitespace-nowrap px-6 py-4">1ro A</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  )
}

export default Inscripciones