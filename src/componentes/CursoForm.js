import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createCurso, updateCurso, getCursoById, proximaSeccion } from '../api/cursoService';
import { getDocentes } from '../api/docenteService';

const CursoForm = () => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const navigate = useNavigate(); // Permite redirigir
  const [formData, setFormData] = useState({
    grado: '',
    docenteId: '',
  })

  const [error, setError] = useState(''); // Para mostrar mensajes de error
  const [seccion, setSeccion] = useState('');
  const [docentes, setDocentes] = useState([]);
  


  useEffect(() => {
    if (id) {
      const fetchCurso = async () => {
        const data = await getCursoById(id);
        setFormData(data);
      };
      fetchCurso();
    }
    if (formData.grado) {
      const fetchSeccion = async () => {
        try {
          const response = await proximaSeccion(formData.grado);
          setSeccion(response.seccion);
        } catch (error) {
          console.error('Error obteniendo la próxima sección', error);
          setSeccion('No disponible');
        }
      };
      fetchSeccion();
    }
    const docenteList = async () => {
      const data = await getDocentes();
      setDocentes(data);
    };
    docenteList();
  }, [id, formData.grado]);


  // Manejar cambios en los campos del docente
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateCurso(id, formData);
    } else {
      await createCurso(formData);
    }
    navigate('/admin/cursos')
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-[20px] font-bold mb-6 text-center'>Registro Curso</h2>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <label className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 flex justify-between items-center space-x-4 pl-2'>
          Grado
          <select
            className=' border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 w-[65%] h-[100%] self-center p-1'
            name="grado"
            value={formData.grado}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione un grado</option>
            {['1', '2', '3', '4', '5', '6'].map((g) => (
              <option key={g} value={g}>{g}° grado</option>
            ))}
          </select>
        </label>
        <p>Próxima sección: <strong>{seccion}</strong></p>
        <label className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 flex justify-between items-center space-x-4 pl-2'>
          Docente del curso
          <select
            className=' border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 w-[65%] h-[100%] self-center p-1'
            name="docenteId"
            value={formData.docenteId}
            onChange={handleChange}
            required
          >
            <option disabled value="">Seleccione un grado</option>
            {docentes.map((docente, index) => (
              <option key={index} value={docente.id}>{docente.nombre + ' ' + docente.apellido}</option>
            ))}
          </select>
        </label>
        <button className='text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center' type="submit">Guardar</button>

      </form>
    </div>
  )
}

export default CursoForm





