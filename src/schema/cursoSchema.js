import * as yup from "yup";

export const cursoSchema = yup.object().shape({
    grado: yup
    .string()
    .required('Seleccione un grado')
    .oneOf(['1', '2', '3', '4', '5', '6'], 'Seleccione un grado válido'),
    docenteId: yup
    .string()
    .required('Seleccione un docente')
})