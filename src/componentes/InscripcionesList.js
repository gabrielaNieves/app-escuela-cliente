import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RiEditLine } from "react-icons/ri";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { buscarInscripciones, eliminarInscripcion } from '../api/inscripcionService';
import { getCursos } from '../api/cursoService';
import ConstanciasMenu from './ConstanciasMenu';

const InscripcionesList = () => {
    const [inscripciones, setInscripciones] = useState([]);
    const [cursos, setCursos] = useState([]);
  const [filtros, setFiltros] = useState({
    genero: '',
    cursoId: '',
    estado: '',
  });


    // Obtener inscripciones
  const fetchInscripciones = async (filtros) => {
    const data = await buscarInscripciones(filtros);
    setInscripciones(data);
  };

 // Obtener cursos al inicio
 const fetchCursos = async () => {
  const data = await getCursos();
  setCursos(data);
};
  useEffect(() => { 
    fetchInscripciones();
    fetchCursos();
  }, []);

  const handleDelete = async (id) => {
    await eliminarInscripcion(id);
    setInscripciones(inscripciones.filter((e) => e.id !== id));
  };

  // Manejar cambios en los filtros
  const handleFiltroChange = (e) => {
    const { name, value } = e.target;
    setFiltros((prev) => ({ ...prev, [name]: value }));
  };

  // Aplicar filtros
  const handleAplicarFiltros = () => {
    fetchInscripciones(filtros); // Pasar los filtros para aplicar
  };

  return (
    <div>
      <div className='flex'>
    <div className='w-3/4 flex flex-row justify-evenly p-1'>
        <div className=''> 
          <label className='block mb-1 text-sm font-medium text-gray-900'>Género</label>
          <select className='w-24 p-1 mb-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500' name="genero" value={filtros.genero} onChange={handleFiltroChange}>
            <option value="">Todos</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
        </div>
        <div>
          <label className='block mb-1 text-sm font-medium text-gray-900'>Curso</label>
          <select className='w-24 p-1 mb-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500' name="cursoId" value={filtros.cursoId} onChange={handleFiltroChange}>
            <option value="">Todos</option>
            {cursos.map((curso) => (
              <option key={curso.id} value={curso.id}>
                {curso.titulo}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className='block mb-1 text-sm font-medium text-gray-900'>Estado</label>
          <select className='w-24 p-1 mb-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500' name="estado" value={filtros.estado} onChange={handleFiltroChange}>
            <option value="">Todos</option>
            <option value="activo">Activo</option>
            <option value="inactivo">Inactivo</option>
          </select>
        </div>
      </div>
      <button className='justify-start font-medium rounded-lg text-sm px-1 py-1 w-18 h-12 text-center underline text-gray-900 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-primary-300' onClick={handleAplicarFiltros}>Aplicar Filtros</button>
      </div>
<div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden  border border-gray-200 shadow rounded-lg bg-white ">
      <div className='flex flex-row justify-between'>
        <h1 className='text-lg font-semibold pl-3 my-2'>Inscripciones</h1>
        <Link to="crear" className='my-1 mr-2'>
        <button className='font-semibold underline rounded-lg text-medium px-2 py-2 m-auto text-center text-blue-600  hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-primary-300  '>Inscribir</button>
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
          {inscripciones.map((inscripcion) => (
            <tr
            key={inscripcion.id} className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
              <td className="whitespace-nowrap px-6 py-4 font-medium">{inscripcion.Estudiante.nombre} {inscripcion.Estudiante.apellido}</td>
              <td className="whitespace-nowrap px-6 py-4">{inscripcion.Curso.grado} {inscripcion.Curso.seccion}</td>
              <td className="whitespace-nowrap px-6 py-4">{inscripcion.fechaInscripcion}</td>
              <td className="whitespace-nowrap px-6 py-4">{inscripcion.Estudiante.genero}</td>
              <td className="whitespace-nowrap px-6 py-4"><div className={`${inscripcion?.estado === 'Activo' ? 'rounded-md py-1 px-auto bg-green-500 bg-opacity-40 text-green-800 text-center font-normal' : 'rounded-md py-1 px-auto bg-red-500 bg-opacity-40 text-red-800 text-center font-normal'} `}>{inscripcion.estado}</div></td>
              <Link to={`edicion/${inscripcion.id}`}>
              <button className='px-4 py-4 hover:bg-blue-200'><RiEditLine className='h-5 w-5'/></button>
              </Link>
                <button className='px-4 py-4 hover:bg-blue-200' onClick={() => handleDelete(inscripcion.id)}><RiDeleteBin6Fill className='h-5 w-5'/></button>
              <ConstanciasMenu/>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</div>
  );
};

export default InscripcionesList