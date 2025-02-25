import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { createDocente, updateDocente, getDocenteById } from '../api/docenteService';
import { docenteSchema } from '../schema/DocenteSchema';

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

    const [errors, setErrors] = useState(''); // Para mostrar mensajes de error
    

    useEffect(() => {
      if (id) {
        const fetchDocente = async () => {
          const data = await getDocenteById(id);
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
    try {
      // Validar el formulario antes de enviarlo
      await docenteSchema.validate(formData, { abortEarly: false });
  
      if (id) {
        await updateDocente(id, formData);
      } else {
        await createDocente(formData);
      }
  
      // Si todo sale bien, limpiar errores y navegar
      setErrors({});
      navigate('/admin/docentes');
    } catch (error) {
      if (error.name === 'ValidationError') {
        const newErrors = {};
        error.inner.forEach(err => {
          newErrors[err.path] = err.message;
        });
        return setErrors(newErrors); 
      }
  
      // Manejar errores del backend o conexión
      setErrors(error.response?.data?.message ? { server: error.response.data.message } : { server: 'Error de servidor' });
  };
  }
  
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
        />
        {errors?.nombre && <p className="text-red-500">{errors.nombre}</p>}
        <input
          className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2'
          type="text"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          placeholder="Apellido del Docente"
        />
        {errors?.apellido && <p className="text-red-500">{errors.apellido}</p>}
      </div>
      <div className='flex space-x-6 mb-4'>
        <input
        className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2'
          type="text"
          name="cedula"
          value={formData.cedula}
          onChange={handleChange}
          placeholder="Cedula del Docente"
        />
        {errors?.cedula && <p className="text-red-500">{errors.cedula}</p>}
        <input
        className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2'
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          placeholder="Telefono"
          minLength="9"
          maxLength="14"
        />
        {errors?.telefono && <p className="text-red-500">{errors.telefono}</p>}
      </div>
      <div className='flex space-x-6 mb-4'>
      <input
      className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2'
        type="text"
        name="direccion"
        value={formData.direccion}
        onChange={handleChange}
        placeholder="Dirección"
      />
      {errors?.direccion && <p className="text-red-500">{errors.direccion}</p>}
      <input
      className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2'
        type="text"
        name="titulo"
        value={formData.titulo}
        onChange={handleChange}
        placeholder="Título"
      />
      {errors?.titulo && <p className="text-red-500">{errors.titulo}</p>}
      </div>
      
      <br />
        {errors?.server && <p className="text-red-500">⚠️ {errors.server}</p>}
      <button className='text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center' type="submit">Guardar</button>

    </form>
  </div>
  )
}

export default DocenteForm





