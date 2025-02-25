import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createEstudiante, updateEstudiante, getEstudianteById } from '../api/estudianteService';
import { MdDeleteSweep } from 'react-icons/md';
import { estudianteSchema } from '../schema/estudianteSchema';

// Objeto base para la información de un padre
const initialParentData = {
  id: null,
  nombre: '',
  apellido: '',
  cedula: '',
  fechaDeNacimiento: '',
  estadoCivil: '',
  profesion: '',
  direccion: '',
  telefono: '',
  relacion: ''
};

const EstudianteForm = () => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const navigate = useNavigate(); // Permite redirigir

  // Inicializamos el formData y el estado de errores como objetos
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    cedula: '',
    genero: '',
    nacionalidad: '',
    fechaDeNacimiento: '',
    lugarDeNacimiento: '',
    Padres: [initialParentData]
  });

  const [errors, setErrors] = useState({});

  // Si se recibe un id, se carga el estudiante
  useEffect(() => {
    if (id) {
      const fetchEstudiante = async () => {
        try {
          const data = await getEstudianteById(id);
          if (data) setFormData(data);
        } catch (error) {
          console.error('Error obteniendo el estudiante:', error);
        }
      };
      fetchEstudiante();
    }
  }, [id]);

  // Manejar cambios en los campos del estudiante
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Manejar cambios en los campos de un padre específico usando map
  const handleParentChange = (index, e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      Padres: prevData.Padres.map((padre, i) =>
        i === index ? { ...padre, [name]: value } : padre
      )
    }));
  };

  // Agregar un nuevo padre al arreglo
  const addParent = () => {
    if (formData.Padres.length >= 2) {
      setErrors({ padre: 'Solo puedes agregar hasta 2 Padres por estudiante.' });
      return;
    }
    setFormData({
      ...formData,
      Padres: [...formData.Padres, { ...initialParentData }]
    });
    setErrors({});
  };

  // Eliminar un padre del arreglo
  const removeParent = (index) => {
    const updatedParents = formData.Padres.filter((_, i) => i !== index);
    setFormData({ ...formData, Padres: updatedParents });
    setErrors({});
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // Limpiar errores anteriores
    try {
      
      await estudianteSchema.validate(formData, { abortEarly: false }); //Validación

      if (id) {
        await updateEstudiante(id, formData); // Actualizar
      } else {
        await createEstudiante(formData); // Crear nuevo
      }

      navigate('/admin/alumnos'); // Redirigir a la lista de estudiantes
    } catch (error) {
      if (error.name === 'ValidationError') {
        const newErrors = {};
        error.inner.forEach(err => {
          newErrors[err.path] = err.message;
        });
        console.log(newErrors);
        setErrors(newErrors);
        return;
      }
      // Manejar errores del backend o conexión
      setErrors({ server: error.response?.data?.message || 'Error de servidor' });
    }
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-[20px] font-bold mb-6 text-center'>Registro del Estudiante</h2>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        {/* Datos del Estudiante */}
        <div className='flex space-x-6 mb-4'>
          <input
            className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2'
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre del estudiante"
          />
          {errors?.nombre && <p className="text-red-500">{errors.nombre}</p>}
          <input
            className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2'
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            placeholder="Apellido del estudiante"
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
            placeholder="Cédula del estudiante"
          />
          {errors?.cedula && <p className="text-red-500">{errors.cedula}</p>}
          <select
            className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2'
            name="genero"
            value={formData.genero || ''}
            onChange={handleChange}
          >
            <option value="" disabled>Género</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otros">Otros</option>
          </select>
          {errors?.genero && <p className="text-red-500">{errors.genero}</p>}
        </div>
        <div className='flex space-x-6 mb-4'>
          <select
            className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2'
            name="nacionalidad"
            value={formData.nacionalidad || ''}
            onChange={handleChange}
          >
            <option value="" disabled>Nacionalidad</option>
            <option value="Venezolana">Venezolana</option>
            <option value="Extranjera">Extranjera</option>
          </select>
          {errors?.nacionalidad && <p className="text-red-500">{errors.nacionalidad}</p>}
          <label className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 flex justify-between items-center space-x-4 w-1/2 pl-2'>
            Fecha de Nacimiento:
            <input
              className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 w-[65%] h-[100%] self-center p-1'
              type="date"
              name="fechaDeNacimiento"
              value={formData.fechaDeNacimiento}
              onChange={handleChange}
              placeholder="Fecha de Nacimiento"
            />
          </label>
          {errors?.fechaDeNacimiento && <p className="text-red-500">{errors.fechaDeNacimiento}</p>}
        </div>
        <input
          className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2'
          type="text"
          name="lugarDeNacimiento"
          value={formData.lugarDeNacimiento}
          onChange={handleChange}
          placeholder="Lugar de Nacimiento"
        />
        {errors?.lugarDeNacimiento && <p className="text-red-500">{errors.lugarDeNacimiento}</p>}
        
        {/* Datos de los Padres */}
        <h3 className='my-2'>Información de los Padres (Máximo 2)</h3>
        {formData.Padres.map((padre, index) => (
          <div
            key={index}
            style={{ marginBottom: '1em', border: '1px solid #ccc', padding: '1em' }}
          >
            {padre.id && <input type="hidden" name="id" value={padre.id} />}
            <div className='flex space-x-6 mb-4'>
              <input
                className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2'
                type="text"
                name="nombre"
                value={padre.nombre}
                onChange={(e) => handleParentChange(index, e)}
                placeholder="Nombre del padre"
              />
              {errors.Padres && errors.Padres[index] && errors.Padres[index].nombre && (
                <p className="text-red-500">{errors.Padres[index].nombre}</p>
              )}
              <input
                className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2'
                type="text"
                name="apellido"
                value={padre.apellido}
                onChange={(e) => handleParentChange(index, e)}
                placeholder="Apellido del padre"
              />
              {errors.Padres && errors.Padres[index] &&  errors.Padres[index].apellido && (
                <p className="text-red-500">{errors.Padres[index].apellido}</p>
              )}
            </div>
            <div className='flex space-x-6 mb-4'>
              <input
                className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2'
                type="text"
                name="cedula"
                value={padre.cedula}
                onChange={(e) => handleParentChange(index, e)}
                placeholder="Cédula del padre"
              />
              {errors?.Padres?.[index].cedula && (
                <p className="text-red-500">{errors.Padres[index].cedula}</p>
              )}
              <label className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 flex justify-between items-center space-x-4 w-1/2 pl-2'>
                Fecha de Nacimiento:
                <input
                  className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 w-[65%] h-[100%] self-center p-1'
                  type="date"
                  min="1940-01-01"
                  name="fechaDeNacimiento"
                  value={padre.fechaDeNacimiento}
                  onChange={(e) => handleParentChange(index, e)}
                  placeholder="Fecha de Nacimiento"
                />
              </label>
              {errors?.Padres?.[index].fechaDeNacimiento && (
                <p className="text-red-500">{errors.Padres[index].fechaDeNacimiento}</p>
              )}
            </div>
            <div className='flex space-x-6 mb-4'>
              <label className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 flex justify-between items-center space-x-4 w-1/2 pl-2'>
                Estado Civil
                <select
                  className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 w-[65%] h-[100%] self-center p-1'
                  name="estadoCivil"
                  value={padre.estadoCivil || ''}
                  onChange={(e) => handleParentChange(index, e)}
                >
                  <option value="" disabled>Estado Civil</option>
                  <option value="Soltero">Soltero</option>
                  <option value="Casado">Casado</option>
                  <option value="Viudo">Viudo</option>
                  <option value="Divorciado">Divorciado</option>
                </select>
              </label>
              {errors?.Padres?.[index].estadoCivil && (
                <p className="text-red-500">{errors.Padres[index].estadoCivil}</p>
              )}
              <input
                className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2'
                type="text"
                name="profesion"
                value={padre.profesion}
                onChange={(e) => handleParentChange(index, e)}
                placeholder="Profesión del padre"
              />
              {errors?.Padres?.[index].profesion && (
                <p className="text-red-500">{errors.Padres[index].profesion}</p>
              )}
            </div>
            <div className='flex space-x-6 mb-4'>
              <input
                className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2'
                type="text"
                name="direccion"
                value={padre.direccion}
                onChange={(e) => handleParentChange(index, e)}
                placeholder="Dirección del padre"
              />
              {errors?.Padres?.[index].direccion && (
                <p className="text-red-500">{errors.Padres[index].direccion}</p>
              )}
              <input
                className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2'
                type="tel"
                name="telefono"
                value={padre.telefono}
                onChange={(e) => handleParentChange(index, e)}
                placeholder="Teléfono"
              />
              {errors?.Padres?.[index].telefono && (
                <p className="text-red-500">{errors.Padres[index].telefono}</p>
              )}
              <label className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 flex justify-between items-center space-x-4 w-1/2 pl-2'>
                Relación con el Estudiante
                <select
                  className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 w-[65%] h-[100%] self-center p-1'
                  name="relacion"
                  value={padre.relacion || ''}
                  onChange={(e) => handleParentChange(index, e)}
                >
                  <option value="" disabled>Relación</option>
                  <option value="Madre">Madre</option>
                  <option value="Padre">Padre</option>
                  <option value="Representante">Representante</option>
                </select>
              </label>
              {errors?.Padres?.[index].relacion && (
                <p className="text-red-500">{errors.Padres[index].relacion}</p>
              )}
            </div>
            <button
              className='bg-red-400 text-white font-medium rounded-lg text-sm px-3 py-2 text-center'
              type="button"
              onClick={() => removeParent(index)}
            >
              <MdDeleteSweep />
            </button>
          </div>
        ))}
        {errors?.padre && <p style={{ color: 'red' }}>{errors.padre}</p>}
        <div className='flex flex-row justify-center space-x-3'>
          <button
            className='text-blue-600 border border-blue-600 hover:bg-blue-50 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
            type="button"
            onClick={addParent}
            disabled={formData.Padres.length >= 2}
          >
            Agregar Padre
          </button>
          <br />
          {errors?.server && <p style={{ color: 'red' }}>{errors.server}</p>}
          <button
            className='text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center'
            type="submit"
          >
            {id ? 'Actualizar' : 'Guardar'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EstudianteForm;
