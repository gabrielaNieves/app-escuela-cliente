import {  useState } from 'react'
import axios from "axios";

const RegistroForm = ({ onSave }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        usuario: '',
        clave: '',
        confirmarClave: '',
        rol: '1', // Opcional, dependiendo de los roles
    });

    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.clave !== formData.confirmarClave) {
            setError('Las contraseñas no coinciden');
            return;
        }

        try {
            const response = await axios.post('/api/usuarios/registro', {
                nombre: formData.nombre,
                apellido: formData.apellido,
                usuario: formData.usuario,
                clave: formData.clave,
                rol: formData.rol,
            });

            setError(null);
            if (onSave) onSave(response.data);
            alert('Colaborador registrado con éxito');
            setFormData({
                nombre: '',
                apellido: '',
                usuario: '',
                clave: '',
                confirmarClave: '',
                rol: '1',
            });
        } catch (err) {
            setError(err.response?.data?.message || 'Error al registrar colaborador');
        }
    };

    return (
        <section className=''>
            <div className='flex flex-col items-center mt-4 mb-6 px-4 mx-auto lg:py-0'>
                <div className='w-full bg-white rounded-lg shadow py-4 md:mt-0 sm:max-w-md xl:p-0'>
                    <div className="p-2 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className=' text-2xl text-center font-bold leading-tight tracking-tight text-gray-600'>Registro de Usuarios</h1>
                        <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
                            {error && <p className="text-red-500">{error}</p>}
                            <div className='flex space-x-6 mb-4'>
                                <div>
                                <label className='block mb-2 text-sm font-medium text-gray-900' htmlFor="nombre">Nombre:</label>
                                <input
                                    className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2'
                                    type="text"
                                    name="nombre"
                                    value={formData.usuario}
                                    onChange={handleChange}
                                    required
                                />
                                </div>
                                <div>
                                <label className='block mb-2 text-sm font-medium text-gray-900' htmlFor="apellido">Apellido:</label>
                                <input
                                    className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2'
                                    type="text"
                                    name="apellido"
                                    value={formData.usuario}
                                    onChange={handleChange}
                                    required
                                />
                                </div>
                            </div>
                            <div>
                                <label className='block mb-2 text-sm font-medium text-gray-900' htmlFor="usuario">Usuario:</label>
                                <input
                                    className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2'
                                    type="text"
                                    name="usuario"
                                    value={formData.usuario}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='flex space-x-6 mb-4'>
                            <div>
                                <label className='block mb-2 text-sm font-medium text-gray-900' htmlFor="clave">Contraseña:</label>
                                <input
                                    className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2'
                                    type="password"
                                    name="clave"
                                    value={formData.clave}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className='block mb-2 text-sm font-medium text-gray-900' htmlFor="confirmarClave">Confirmar Contraseña:</label>
                                <input
                                    className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2'
                                    type="password"
                                    name="confirmarClave"
                                    value={formData.confirmarClave}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            </div>
                            <div>
                                <label className='block mb-2 text-sm font-medium text-gray-900' htmlFor="rol">Rol:</label>
                                <select className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2' name="rol" value={formData.rol} onChange={handleChange}>
                                    <option value='1'>Administrador</option>
                                    <option value='2'>Colaborador</option>
                                </select>
                            </div>
                            <button className='w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center' type="submit">Registrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegistroForm;