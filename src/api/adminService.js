import api from './axios';

// obtener totales
export const obtenerTotales = async () => {
    try{
        const response = await api.get('/inicio/totales') 
        return response.data   
    }
    catch (error) {
        console.error('Error al obtener los totales:', error);
        throw error;
      }
}
//total Inscripciones y listar max 5
export const obtenerInscripciones = async () => {
    try{
        const response = await api.get('/inicio/totalInscripciones') 
        return response.data   
    }
    catch (error) {
        console.error('Error al obtener los totales:', error);
        throw error;
      }
}