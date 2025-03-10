import * as yup from 'yup';

export const estudianteSchema = yup.object().shape({
  nombre: yup.string().matches(/^[_A-zA-ZñÑáéíóúÁÉÍÓÚ]*((|\s)*[_A-zA-ZñÑáéíóúÁÉÍÓÚ])*$/g, 'Formato nombre invalido').required('Este campo es obligatorio').min(2, 'Mínimo 2 caracteres'),
  apellido: yup.string().matches(/^[_A-zA-ZñÑáéíóúÁÉÍÓÚ]*((|\s)*[_A-zA-ZñÑáéíóúÁÉÍÓÚ])*$/g, 'Formato apellido invalido').required('Este campo es obligatorio').min(2, 'Mínimo 2 caracteres'),
  cedula: yup.string().matches(/^\d{7,9}$/, 'Formato de cédula invalida').required('Este campo es obligatorio'),
  genero: yup.string().oneOf(['Masculino', 'Femenino', 'Otro'], 'Género no válido').required('Este campo es obligatorio'),
  nacionalidad: yup.string().required('Este campo es obligatorio'),
  fechaDeNacimiento: yup.date().required('Este campo es obligatorio').typeError('Fecha no válida'),
  lugarDeNacimiento: yup.string().matches(/^[_A-zA-ZñÑáéíóúÁÉÍÓÚ]*((|\s)*[_A-zA-ZñÑáéíóúÁÉÍÓÚ])*$/g, 'Formato invalido').required('Este campo es obligatorio'),
  Padres: yup.array().of(
    yup.object().shape({
      id: yup.string().nullable(),
      nombre: yup.string().matches(/^[_A-zA-ZñÑáéíóúÁÉÍÓÚ]*((|\s)*[_A-zA-ZñÑáéíóúÁÉÍÓÚ])*$/g, 'Formato nombre invalido').required('El nombre es obligatorio').min(2, 'Mínimo 2 caracteres'),
      apellido: yup.string().matches(/^[_A-zA-ZñÑáéíóúÁÉÍÓÚ]*((|\s)*[_A-zA-ZñÑáéíóúÁÉÍÓÚ])*$/g, 'Formato apellido invalido').required('El apellido es obligatorio').min(2, 'Mínimo 2 caracteres'),
      cedula: yup.string().matches(/^\d{7,9}$/, 'Formato de cédula invalida').required('La cédula es obligatoria'),
      fechaDeNacimiento: yup.date().required('Este campo es obligatorio').typeError('Fecha no válida'),
      estadoCivil: yup.string().oneOf(['Soltero', 'Casado', 'Divorciado', 'Viudo'], 'Estado civil no válido').required('Este campo es obligatorio'),
      profesion: yup.string().matches(/^[_A-zA-ZñÑáéíóúÁÉÍÓÚ]*((|\s)*[_A-zA-ZñÑáéíóúÁÉÍÓÚ])*$/g, 'Formato invalido').required('Este campo es obligatorio'),
      direccion: yup.string().min(2, 'Minimo 2 caracteres').max(40, 'maximo 40 caracteres').required('Este campo es obligatorio'),
      telefono: yup.string().matches(/^\d{9,14}$/, 'Formato telefono inválido').required('Este campo es obligatorio'),
      relacion: yup.string().oneOf(['Madre', 'Padre', 'Representante'], 'Relación no válida').required('Este campo es obligatorio'),
    })
  )
});