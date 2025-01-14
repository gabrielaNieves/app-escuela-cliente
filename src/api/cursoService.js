import api from './axios';


// Obtener todos los cursos
export const getCursos = async () => {
    const response = await api.get('/cursos');
    return response.data;
  };
  
  // Obtener un curso por ID
  export const getCursoById = async (id) => {
    const response = await api.get(`/cursos/${id}`);
    return response.data;
  };
  
  // Crear un curso
  export const createCurso = async (cursoData) => {
    const response = await api.post('/cursos', cursoData);
    return response.data;
  };
  
  // Actualizar un curso
  export const updateCurso = async (id, cursoData) => {
    const response = await api.put(`/cursos/${id}`, cursoData);
    return response.data;
  };
  
  // Eliminar un curso
  export const deleteCurso = async (id) => {
    const response = await api.delete(`/cursos/${id}`);
    return response.data;
  };