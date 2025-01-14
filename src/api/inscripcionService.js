import api from './axios';

// Obtener todas las inscripciones
export const buscarInscripciones = async (filtros = {}) => {
  const query = Object.keys(filtros).length ? `?${new URLSearchParams(filtros).toString()}` : '';
  const response = await api.get(`/inscripciones${query}`);
  return response.data;
};
// Obtener una inscripcion por Id
export const buscarInscripcionesPorId = async (id) => {
  const response = await api.get(`/inscripciones/${id}`);
  return response.data;
};

// Crear una inscripcion
export const crearInscripcion = async (data) => {
  const response = await api.post('/inscripciones', data);
  return response.data;
};

// Actualizar una inscripcion
export const actualizarInscripcion = async (id, data) => {
  const response = await api.put(`/inscripciones/${id}`, data);
  return response.data;
};

// Eliminar una inscripcion
export const eliminarInscripcion = async (id) => {
  await api.delete(`/inscripciones/${id}`);
};
