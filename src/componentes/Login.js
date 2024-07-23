import { useRef, useState, useEffect } from 'react'

const Login = () => {
    const usuarioRef = useRef();
    const errRef = useRef();

    const [usuario, setUsuario] = useState('');
    const [clave, setClave] = useState('');
    const [errMensaje, setErrMensaje] = useState('');
    const [Ingreso, setIngreso] = useState(false);

    useEffect(() => {
        usuarioRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMensaje('');
    }, [usuario, clave])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(usuario, clave);
        setUsuario('');
        setClave('');
        setIngreso(true);
    }

    return (
        <section className='bg-gray-50 dark:bg-gray-900'>
            <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
            <div className='w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0'>
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p ref={errRef} className={errMensaje ? "text-red-500" : "hidden"} aria-live="assertive">{errMensaje}</p>
            <h1 className=' text-2xl text-center font-bold leading-tight tracking-tight text-gray-600'>Ingresa a tu cuenta</h1>
            <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
                <label className='block mb-2 text-sm font-medium text-gray-900' htmlFor="usuario">Usuario</label>
                <input
                    className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2'
                    type="text"
                    id="usuario"
                    ref={usuarioRef}
                    autoComplete="off"
                    onChange={(e) => setUsuario(e.target.value)}
                    value={usuario}
                    required
                />

                <label className='block mb-2 text-sm font-medium text-gray-900' htmlFor="clave">Contraseña</label>
                <input
                className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2'
                    type="password"
                    id="clave"
                    onChange={(e) => setClave(e.target.value)}
                    value={clave}
                    required
                />
                <button className='w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Acceder</button>
            </form>
            </div>
            
            </div>
            

            </div>
            
        </section>
    )
}

export default Login