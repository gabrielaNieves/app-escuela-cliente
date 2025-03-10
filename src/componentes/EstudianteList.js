import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RiEditLine } from "react-icons/ri";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { getEstudiantes, deleteEstudiante } from '../api/estudianteService';

const EstudianteList = ({ onEdit }) => {
  const [estudiantes, setEstudiantes] = useState([]);

  useEffect(() => {
    const fetchEstudiantes = async () => {
      const data = await getEstudiantes();
      setEstudiantes(data);
    };
    fetchEstudiantes();
  }, []);

  const handleDelete = async (id) => {
    await deleteEstudiante(id);
    setEstudiantes(estudiantes.filter((e) => e.id !== id));
  };

  return (
<div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden  border border-gray-200 shadow rounded-lg bg-white ">
        <div className='flex flex-row justify-between'>
        <h1 className='text-lg font-semibold pl-3 my-2'>Estudiantes</h1>
        <Link to="registro" className='m-1'>
        <button className='font-medium rounded-lg text-sm px-2 py-2 m-auto text-center text-blue-600  hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-primary-300  '>Nuevo Estudiante</button>
        </Link>
        </div>
        <table
          className="min-w-full bg-white rounded-md text-left text-sm font-light text-surface border-t dark:text-white">
          <thead
            className="border-b border-neutral-200 font-medium dark:border-white/10">
            <tr>
            <th scope="col" className="px-4 py-4">Nombre</th>
              <th scope="col" className="px-4 py-4">Apellido</th>
              <th scope="col" className="px-4 py-4">Cédula</th>
              <th scope="col" className="px-4 py-4">Genero</th>
              <th scope="col" className="px-4 py-4">Nacionalidad</th>
              <th scope="col" className="px-4 py-4">Fecha de Nacimiento</th>
              <th scope="col" className="px-4 py-4">Lugar de Nacimiento</th>
              <th scope="col" className="px-4 py-4">Acciones</th>
              
            </tr>
          </thead>
          <tbody>
          {estudiantes.map((estudiante) => (
            <tr
            key={estudiante.id} className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
              <td className="whitespace-nowrap px-4 py-4 font-medium">{estudiante.nombre}</td>
              <td className="whitespace-nowrap px-4 py-4 font-medium">{estudiante.apellido}</td>
              <td className="whitespace-nowrap px-4 py-4">{estudiante.cedula}</td>
              <td className="whitespace-nowrap px-4 py-4">{estudiante.genero}</td>
              <td className="whitespace-nowrap px-4 py-4">{estudiante.nacionalidad}</td>
              <td className="whitespace-nowrap px-4 py-4">{estudiante.fechaDeNacimiento}</td>
              <td className="whitespace-nowrap px-4 py-4">{estudiante.lugarDeNacimiento}</td>
              <td className="whitespace-nowrap px-4 py-4">
              <Link to={`edicion/${estudiante.id}`}>
              <button className='px-4 py-4 hover:bg-blue-200'><RiEditLine className='h-5 w-5'/></button>
              </Link>
                <button className='px-4 py-4 hover:bg-blue-200' onClick={() => handleDelete(estudiante.id)}><RiDeleteBin6Fill className='h-5 w-5'/></button>
              </td>
             
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  );
};

export default EstudianteList;
