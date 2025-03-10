import * as yup from "yup";

export const docenteSchema = yup.object().shape({
    nombre: yup.string().min(2, "Ingrese más de 2 caracteres").matches(/^[_A-zA-ZñÑáéíóúÁÉÍÓÚ]*((|\s)*[_A-zA-ZñÑáéíóúÁÉÍÓÚ])*$/g, 'Formato nombre invalido').required("Este campo es requerido"),
    apellido: yup.string().min(2, "Minimo 2 caracteres").matches(/^[_A-zA-ZñÑáéíóúÁÉÍÓÚ]*((|\s)*[_A-zA-ZñÑáéíóúÁÉÍÓÚ])*$/g, 'Formato apellido invalido').required("Este campo es requerido"),
    cedula: yup.string().matches(/^\d{7,9}$/, 'Debe contener un formato válido').required('Este campo es obligatorio'),
    telefono: yup.string().matches(/^\d{9,14}$/, 'Debe tener entre 9 y 14 dígitos').required('Este campo es obligatorio'),
    direccion: yup.string().min(2, "Minimo 2 caracteres").max(30, "Máximo 30 caracteres").required("Este campo es requerido"),
    titulo: yup.string().min(2, "Minimo 2 caracteres").max(25, "Máximo 25 caracteres").required("Este campo es requerido"),
})