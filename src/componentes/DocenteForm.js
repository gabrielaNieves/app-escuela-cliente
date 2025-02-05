import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { createDocente, updateDocente, getDocenteById } from '../api/docenteService';

const DocenteForm = () => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const navigate = useNavigate(); // Permite redirigir
    const [formData, setFormData] = useState({
    nombre:'',
    apellido:'',
    cedula:'',
    telefono:'',
    direccion:'',
    titulo:'',
    })

    const [error, setError] = useState(''); // Para mostrar mensajes de error
    

    useEffect(() => {
      if (id) {
        const fetchDocente = async () => {
          const data = await getDocenteById(id);
          console.log(data)
          setFormData(data);
        };
        fetchDocente();
      }
    }, [id]);


  // Manejar cambios en los campos del docente
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateDocente(id, formData);
    } else {
      await createDocente(formData);
    }
    navigate('/admin/docentes')
  };

  return (
    <div className='flex flex-col items-center justify-center'>
    <h2 className='text-[20px] font-bold mb-6 text-center'>Registro Docente</h2>
    <form className='flex flex-col' onSubmit={handleSubmit}>

      <div className='flex space-x-6 mb-4'>
        <input
          className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2'
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Nombre del Docente"
          required
        />
        <input
          className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2'
          type="text"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          placeholder="Apellido del Docente"
          required
        />
      </div>
      <div className='flex space-x-6 mb-4'>
        <input
        className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2'
          type="text"
          name="cedula"
          value={formData.cedula}
          onChange={handleChange}
          placeholder="Cedula del Docente"
          required
        />
        <input
        className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2'
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          placeholder="Telefono"
          minLength="9"
          maxLength="14"
          required
        />

      </div>
      <div className='flex space-x-6 mb-4'>
      <input
      className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2'
        type="text"
        name="direccion"
        value={formData.direccion}
        onChange={handleChange}
        placeholder="Dirección"
        required
      />
      <input
      className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2'
        type="text"
        name="titulo"
        value={formData.titulo}
        onChange={handleChange}
        placeholder="Título"
        required
      />
      </div>
      
      <br />
      <button className='text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center' type="submit">Guardar</button>

    </form>
  </div>
  )
}

export default DocenteForm





