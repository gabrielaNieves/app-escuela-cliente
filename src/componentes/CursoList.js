import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RiEditLine } from "react-icons/ri";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { getCursos, deleteCurso } from '../api/cursoService';

const CursoList = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const fetchCursos = async () => {
      const data = await getCursos();
      setCursos(data);
    };
    fetchCursos();
  }, []);

  const handleDelete = async (id) => {
    await deleteCurso(id);
    setCursos(cursos.filter((e) => e.id !== id));
  };

  return (
<div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden  border border-gray-200 shadow rounded-lg bg-white ">
      <div className='flex flex-row justify-between'>
        <h1 className='text-lg font-semibold pl-3 my-2'>Secciones</h1>
        <Link to="crear" className='m-1'>
        <button className='font-medium rounded-lg text-sm px-2 py-2 m-auto text-center text-blue-600  hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-primary-300  '>Nuevo Curso</button>
        </Link>
        </div>
        <table
          className="min-w-full bg-white rounded-md text-left text-sm font-light text-surface border-t dark:text-white">
          <thead
            className="border-b border-neutral-200 font-medium dark:border-white/10">
            <tr>
            <th scope="col" className="px-6 py-4">Grado</th>
            <th scope="col" className="px-6 py-4">seccion</th>
              <th scope="col" className="px-6 py-4">Docente</th>
            </tr>
          </thead>
          <tbody>
          {cursos.map((curso) => (
            <tr
            key={curso.id} className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
              <td className="whitespace-nowrap px-6 py-4 font-medium">{curso.grado}° grado</td>
              <td className="whitespace-nowrap px-6 py-4 font-medium">{curso.seccion}</td>
              <td className="whitespace-nowrap px-6 py-4">{curso.Docente.nombre + ' ' + curso.Docente.apellido}</td>
              <Link to={`edicion/${curso.id}`}>
              <button className='px-4 py-4 hover:bg-blue-200'><RiEditLine className='h-5 w-5'/></button>
              </Link>
                <button className='px-4 py-4' onClick={() => handleDelete(curso.id)}><RiDeleteBin6Fill className='h-5 w-5'/></button>
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

export default CursoList