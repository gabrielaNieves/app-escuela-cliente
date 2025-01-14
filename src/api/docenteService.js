import api from './axios';


// Obtener todos los docentes
export const getDocentes = async () => {
    const response = await api.get('/docentes');
    return response.data;
  };
  
  // Obtener un docente por ID
  export const getDocenteById = async (id) => {
    const response = await api.get(`/docentes/${id}`);
    return response.data;
  };
  
  // Crear un docente
  export const createDocente = async (docenteData) => {
    const response = await api.post('/docentes', docenteData);
    return response.data;
  };
  
  // Actualizar un docente
  export const updateDocente = async (id, docenteData) => {
    const response = await api.put(`/docentes/${id}`, docenteData);
    return response.data;
  };
  
  // Eliminar un docente
  export const deleteDocente = async (id) => {
    const response = await api.delete(`/docentes/${id}`);
    return response.data;
  };