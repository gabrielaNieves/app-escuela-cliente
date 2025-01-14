import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createEstudiante, updateEstudiante, getEstudianteById} from '../api/estudianteService';
import { MdDeleteSweep } from "react-icons/md";

const EstudianteForm = () => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const navigate = useNavigate(); // Permite redirigir
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    cedula: '',
    genero: '',
    nacionalidad: '',
    fechaDeNacimiento: '',
    lugarDeNacimiento: '',
    Padres: [{ id: null, nombre: '', apellido: '', cedula: 0, fechaDeNacimiento: '', estadoCivil: '', profesion: '', direccion: '', relacion: null }],
  });


  const [error, setError] = useState(''); // Para mostrar mensajes de error

  useEffect(() => {
      if (id) {
        const fetchEstudiante = async () => {
          const data = await getEstudianteById(id);
          setFormData(data);
        };
        fetchEstudiante();
      }
    }, [id]);

  // Manejar cambios en los campos del estudiante
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Manejar cambios en los campos de un padre específico
  const handleParentChange = (index, e) => {
    const updatedParents = [...formData.Padres];
    updatedParents[index][e.target.name] = e.target.value;
    setFormData({ ...formData, Padres: updatedParents });
  };

  // Agregar un nuevo padre al arreglo
  const addParent = () => {
    if (formData.Padres.length >= 2) {
      setError('Solo puedes agregar hasta 2 padres por estudiante.');
      return;
    }
    setFormData({
      ...formData,
      Padres: [...formData.Padres, { id: null, nombre: '', apellido: '', cedula: 0, fechaDeNacimiento: '', estadoCivil: '', profesion: '', direccion: '', relacion: '' }],
    });
    setError(''); // Limpiar el mensaje de error si se agrega exitosamente
  };

  // Eliminar un padre del arreglo
  const removeParent = (index) => {
    const updatedParents = formData.Padres.filter((_, i) => i !== index);
    setFormData({ ...formData, Padres: updatedParents });
    setError(''); // Limpiar mensajes de error si quedan menos de 2 padres
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateEstudiante(id, formData); // Actualizar
    } else {
      await createEstudiante(formData); // Crear nuevo
    }
    navigate('/admin/alumnos'); // Redirige a la lista de estudiantes
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-[20px] font-bold mb-6 text-center'>Registro del Estudiante</h2>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <div className='flex space-x-6 mb-4'>
          <input
            className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2'
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre del estudiante"
            required
          />
          <input
            className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2'
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            placeholder="Apellido del estudiante"
            required
          />
        </div>
        <div className='flex space-x-6 mb-4'>
          <input
          className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2'
            type="number"
            name="cedula"
            value={formData.cedula}
            onChange={handleChange}
            placeholder="Cedula del estudiante"
            required
          />
          <select
            className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2'
            name="genero"
            defaultValue={formData.genero}
            onChange={handleChange}
            placeholder="Género del estudiante"
            required
          >
            <option disabled>Género</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>

        </div>
        <div className='flex space-x-6 mb-4'>
        <input
        className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2'
          type="text"
          name="nacionalidad"
          value={formData.nacionalidad}
          onChange={handleChange}
          placeholder="Nacionalidad del estudiante"
          required
        />
        <label className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 flex justify-between items-center space-x-4 w-1/2 pl-2'>
          Fecha de Nacimiento:
          <input
            className=' border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 w-[65%] h-[100%] self-center p-1'
            type="date"
            name="fechaDeNacimiento"
            value={formData.fechaDeNacimiento}
            onChange={handleChange}
            placeholder="fecha de Nacimiento"
            required
          />
        </label>
        </div>

        <input
        className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2'
          type="text"
          name="lugarDeNacimiento"
          value={formData.lugarDeNacimiento}
          onChange={handleChange}
          placeholder="Lugar de Nacimiento"
          required
        />
       
        
        <h3 className='my-2'>Información de los Padres (Máximo 2)</h3>
        {formData.Padres.map((padre, index) => (
          <div key={index} style={{ marginBottom: '1em', border: '1px solid #ccc', padding: '1em' }}>
            {padre.id && <input type="hidden" name="id" value={padre.id} />}
           <div className='flex space-x-6 mb-4'>
            <input
              className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2'
              type="text"
              name="nombre"
              value={padre.nombre}
              onChange={(e) => handleParentChange(index, e)}
              placeholder="Nombre del padre"
              required
            />
            <input
              className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2'
              type="text"
              name="apellido"
              value={padre.apellido}
              onChange={(e) => handleParentChange(index, e)}
              placeholder="Apellido del padre"
              required
            />
            </div>
            <div className='flex space-x-6 mb-4'>
            <input
              className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2'
              type="number"
              name="cedula"
              value={padre.cedula}
              onChange={(e) => handleParentChange(index, e)}
              placeholder="Cédula del padre"
            />
            <label className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 flex justify-between items-center space-x-4 w-1/2 pl-2'>
              Fecha de Nacimiento:
              <input
                className=' border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 w-[65%] h-[100%] self-center p-1'
                type="date"
                min="1940-01-01"
                name="fechaDeNacimiento"
                value={padre.fechaDeNacimiento}
                onChange={(e) => handleParentChange(index, e)}
                placeholder="Fecha de Nacimiento"
                required
              />
            </label>
            </div>
            <div className='flex space-x-6 mb-4'>
            <input
              className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2'
              type="text"
              name="estadoCivil"
              value={padre.estadoCivil}
              onChange={(e) => handleParentChange(index, e)}
              placeholder="Estado Civil"
            />
            <input
              className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2'
              type="text"
              name="profesion"
              value={padre.profesion}
              onChange={(e) => handleParentChange(index, e)}
              placeholder="Profesión del padre"
            />
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
            <label className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 flex justify-between items-center space-x-4 w-1/2 pl-2'>
              Relación con el Estudiante
              <select
                className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 w-[65%] h-[100%] self-center p-1'
                name="relacion"
                defaultValue={padre.relacion}
                onChange={(e) => handleParentChange(index, e)}
                placeholder="Relación"
                required
              >
                <option value="Madre">Madre</option>
                <option value="Padre">Padre</option>
                <option value="Representante">Representante</option>
              </select>
            </label>
            </div>
            
            <button className='bg-red-400 text-white font-medium rounded-lg text-sm px-3 py-2 text-center' type="button" onClick={() => removeParent(index)} >
             <MdDeleteSweep />
            </button>
          </div>
        ))}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div className='flex flex-row justify-center space-x-3'>
        <button className='text-blue-600 border border-blue-600 hover:bg-blue-50 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center' type="button" onClick={addParent} disabled={formData.Padres.length >= 2}>
          Agregar Padre
        </button>
        <br />
        <button className='text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center' type="submit">{id ? 'Actualizar' : 'Guardar'}</button>
        </div>
        
      </form>
    </div>
  );
};

export default EstudianteForm;
