import api from './axios';
import useAuth from '../hooks/useAuth';


export const obtenerUsuarios = async () => {
    const response = await api.get('/usuarios/');
    return response.data
}

export const crearUsuarios = async (usuario) => {
    const response = await api.post('/usuarios/registro', usuario);
    return response.data
}

export const eliminarUsuario = async (id) => {
    await api.delete(`/usuarios/${id}`);
}

export const CerrarSesion = () => {
    const { setAuth } = useAuth();

    const eliminarSesion = async () => {
        setAuth({});
        try{
            const response = await api.post('/usuarios/cerrarSesion');
            return response.data; 
        }
        catch (error) {
            console.error('Error al cerrar Sesión', error);
            throw error;
          }
    }
    return eliminarSesion
}