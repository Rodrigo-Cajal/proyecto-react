import * as Yup from "yup";

export const validationSchema = Yup.object({
  nombre: Yup.string().trim().max(30, "Te pasaste").required("Campo obligatorio"),
  email: Yup.string()
    .email("Debes ingresar un email válido")
    .required("Campo obligatorio"),
    celular: Yup.string()
    .matches(/^\d{10}$/, 'El número de celular debe tener 10 dígitos')
    .required('El celular es obligatorio'),
  
  mensaje: Yup.string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(500, 'El mensaje no puede exceder los 500 caracteres')
    .required('El mensaje es obligatorio'),
});
