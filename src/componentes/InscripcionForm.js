import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { buscarInscripcionesPorId, actualizarInscripcion, crearInscripcion } from '../api/inscripcionService';
import { getCursos } from '../api/cursoService';
import { getEstudiantes } from '../api/estudianteService';

const InscripcionForm = () => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const navigate = useNavigate(); // Permite redirigir
  const [estudiantes, setEstudiantes] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [formData, setFormData] = useState({
    estudianteId: '',
    cursoId:'',
    estado:'',
  });
  

const [error, setError] = useState(''); // Para mostrar mensajes de error
    

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
              const data = await buscarInscripcionesPorId(id);
              setFormData(data);
            }
        
            const cursos = await getCursos();
            const estudiantes = await getEstudiantes();
        
            setCursos(cursos);
            setEstudiantes(estudiantes);
          };
        
          fetchData();
    }, [id]);


  // Manejar cambios en los campos del docente
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await actualizarInscripcion(id, formData);
    } else {
      await crearInscripcion(formData);
    }
    navigate('/admin/inscripciones')
  };

  return (
    <div className='flex flex-col items-center justify-center'>
    <h2 className='text-[20px] font-bold mb-6 text-center'>{ id ? 'Editar Inscripción' : 'Nueva Inscripción'}</h2>
    <form className='flex flex-col' onSubmit={handleSubmit}>

        
      <label>Estudiante:</label>
      <select className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2 mb-3' 
      name="estudianteId" 
      value={formData.estudianteId} 
      onChange={handleChange} 
      required>
        <option value="">Seleccionar...</option>
        {estudiantes.map(est => (
          <option key={est.id} value={est.id}>
            {est.nombre} {est.apellido}
          </option>
        ))}
      </select>

      <label>Curso:</label>
      <select className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2 mb-3'
      name="cursoId" 
      value={formData.cursoId} 
      onChange={handleChange} 
      required>
        <option value="">Seleccionar...</option>
        {cursos.map(curso => (
          <option key={curso.id} value={curso.id}>
            {curso.titulo}
          </option>
        ))}
      </select>

      <label>Estado:</label>
      <select className='border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2 mb-3' 
      name="estado" 
      value={formData.estado} 
      onChange={handleChange} 
      required>
        <option value="">Seleccionar...</option>
        <option value="Activo">Activo</option>
        <option value="Cancelado">Cancelado</option>
      </select>
        
      <br />
      <button className='text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center' type="submit">Guardar</button>

    </form>
  </div>
  )
}

export default InscripcionForm





