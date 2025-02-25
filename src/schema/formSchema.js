import * as yup from "yup";

export const registroSchema = yup.object().shape({
    nombre: yup
    .string()
    .min(2, "Ingrese más de 2 caracteres")
    .required("Este campo es requerido"),
    apellido: yup
    .string()
    .min(2, "Minimo 2 caracteres")
    .required("Este campo es requerido"),
    usuario: yup
    .string()
    .min(6, "Minimo 6 caracteres")
    .required("Este campo es requerido"),
    clave: yup
    .string()
    .required("Este campo es requerido")
    .min(8, "minimo 8 caracteres")
    .max(20, "Máximo 20 caracteres")
    .matches(/[0-9]/, "Debe contener al menos 1 numero")
    .matches(/[a-z]/, "Debe contener al menos 1 minuscula")
    .matches(/[A-Z]/, "Debe contener al menos 1 mayuscula"),
    confirmarClave: yup
    .string()
    .oneOf([yup.ref("clave")], "la contraseña debe coincidir"),
    rolId: yup
    .string()
    .required('Este campo es requerido')
    .oneOf(['1','2'], "Seleccione una opción")
})
