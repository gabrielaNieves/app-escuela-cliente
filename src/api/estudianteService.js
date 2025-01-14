import api from './axios';

// Obtener todos los estudiantes
export const getEstudiantes = async () => {
  const response = await api.get('/estudiantes');
  return response.data;
};
// Obtener un docente por ID
export const getEstudianteById = async (id) => {
  const response = await api.get(`/estudiantes/${id}`);
  return response.data;
};

// Crear un estudiante con padres
export const createEstudiante = async (data) => {
  const response = await api.post('/estudiantes', data);
  return response.data;
};

// Actualizar un estudiante
export const updateEstudiante = async (id, data) => {
  const response = await api.put(`/estudiantes/${id}`, data);
  return response.data;
};

// Eliminar un estudiante
export const deleteEstudiante = async (id) => {
  await api.delete(`/estudiantes/${id}`);
};
