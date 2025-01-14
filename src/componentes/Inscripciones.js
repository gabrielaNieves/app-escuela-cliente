import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { obtenerInscripciones } from '../api/adminService';

const Inscripciones = () => {
  const [totalInscripto, setTotalInscripto] = useState({
    total: 0,
    inscripciones: [],
  });

  
  useEffect(() => {
    const fetchInscriptos = async () => {
      try {
        const data = await obtenerInscripciones();
        setTotalInscripto(data);
      } catch (error) {
        console.error('Error al cargar inscriptos:', error);
      }
    };
    fetchInscriptos();
  }, [])
  

  return (
  <div className="flex flex-col">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div className="overflow-hidden  border border-gray-200 shadow rounded-lg bg-white ">
        <div className='flex flex-row justify-between'>
          <h1 className='text-lg font-semibold pl-3 my-2'>Últimas Inscripciones</h1>
          <Link to="inscripciones" className='my-1 mr-2'>
          <button className='font-semibold underline rounded-lg text-medium px-2 py-2 m-auto text-center text-blue-600  hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-primary-300  '>Ver más</button>
          </Link>
          </div>
          <table
            className="min-w-full bg-white rounded-md text-left text-sm font-light text-surface border-t dark:text-white">
            <thead
              className="border-b border-neutral-200 font-medium dark:border-white/10">
              <tr>
                <th scope="col" className="px-6 py-4">Estudiante</th>
                <th scope="col" className="px-6 py-4">Curso</th>
                <th scope="col" className="px-6 py-4">Fecha de inscripcion</th>
                <th scope="col" className="px-6 py-4">Género</th>
                <th scope="col" className="px-6 py-4">Estado</th>
              </tr>
            </thead>
            <tbody>
            {totalInscripto.inscripciones.map((inscripcion) => (
              <tr
              key={inscripcion.id} className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                <td className="whitespace-nowrap px-6 py-4 font-medium">{inscripcion.Estudiante.nombre} {inscripcion.Estudiante.apellido}</td>
                <td className="whitespace-nowrap px-6 py-4">{inscripcion.Curso.titulo}</td>
                <td className="whitespace-nowrap px-6 py-4">{inscripcion.fechaInscripcion}</td>
                <td className="whitespace-nowrap px-6 py-4">{inscripcion.Estudiante.genero}</td>
                <td className="whitespace-nowrap px-6 py-4"><div className={`${inscripcion?.estado === 'Activo' ? 'rounded-md py-1 px-auto bg-green-500 bg-opacity-40 text-green-800 text-center font-normal' : 'rounded-md py-1 px-auto bg-red-500 bg-opacity-40 text-red-800 text-center font-normal'} `}>{inscripcion.estado}</div>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  ) 
}

export default Inscripciones