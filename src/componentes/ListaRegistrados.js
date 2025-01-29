import { React, useEffect, useState } from 'react';
import { obtenerUsuarios, eliminarUsuario } from '../api/usuarioService';
import { RiDeleteBin6Fill } from "react-icons/ri";


const ListaRegistrados = () => {
  const [totalUsuarios, setTotalUsuarios] = useState([])


  useEffect(() => {
    const fetchRegistrados = async () => {
      try {
        const data = await obtenerUsuarios();
        setTotalUsuarios(data);
      } catch (error) {
        console.error('Error al cargar usuarios:', error);
      }
    }
    fetchRegistrados();
  }, []);

   const handleDelete = async (id) => {
      await eliminarUsuario(id);
      setTotalUsuarios(totalUsuarios.filter((e) => e.id !== id));
    };


  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-4 lg:px-8">
          <div className="overflow-hidden  border border-gray-200 shadow rounded-lg bg-white ">
            <div className='flex flex-row justify-between'>
              <h1 className='text-lg font-semibold pl-3 my-2'>Lista de Usuarios</h1>
            </div>
            <table
              className="min-w-full bg-white rounded-md text-left text-sm font-light text-surface border-t dark:text-white">
              <thead
                className="border-b border-neutral-200 font-medium dark:border-white/10">
                <tr>
                  <th scope="col" className="px-6 py-4">Nombre</th>
                  <th scope="col" className="px-6 py-4">Apellido</th>
                  <th scope="col" className="px-6 py-4">Usuario</th>
                  <th scope="col" className="px-6 py-4">Rol</th>
                  <th scope="col" className="px-6 py-4">Acción</th>
                </tr>
              </thead>
              <tbody>
                {totalUsuarios.map((usuario) => (
                  <tr
                    key={usuario.id} className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{usuario.nombre}</td>
                    <td className="whitespace-nowrap px-6 py-4">{usuario.apellido}</td>
                    <td className="whitespace-nowrap px-6 py-4">{usuario.usuario}</td>
                    <td className="whitespace-nowrap px-6 py-4">{usuario.rolId !== 1 ? <span>Colaborador</span> : <span>Administrador</span>}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className='px-4 py-4 hover:bg-blue-200' onClick={() => handleDelete(usuario.id)}><RiDeleteBin6Fill className='h-5 w-5'/></button>
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

export default ListaRegistrados