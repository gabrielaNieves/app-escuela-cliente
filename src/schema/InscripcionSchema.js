import * as yup from "yup"; 

export const incripcionSchema = yup.object().shape({
    estudianteId: yup
    .string()
    .required('Seleccione un Estudiante'),
    cursoId: yup
    .string()
    .required('Seleccione un Curso'),
    estado: yup
    .string()
    .required('Seleccione un estado')
    .oneOf(['Activo', 'Cancelado'], 'Seleccione un estado válido'),
})