import React, { useState } from "react";
import { useFormik } from "formik";
import { validationSchema } from "./validationSchema";

export const Formulario = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      celular: "",
      mensaje: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      cambiarFormularioEnviado(true);
      setTimeout(() => cambiarFormularioEnviado(false), 3000);
      actions.resetForm();
    },
  });

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="nombre" className="font-semibold pb-2">Nombre y Apellido</label>
      <input
        value={values.nombre}
        onChange={handleChange}
        onBlur={handleBlur}
        type="text"
        id="nombre"
        placeholder="Ingresa tu nombre y apellido"
        className={errors.nombre && touched.nombre ? "input-error" : ""} 
      />
      {errors.nombre && touched.nombre && <p className="error">{errors.nombre}</p>}
      
      <label htmlFor="email" className="font-semibold pb-2">Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        type="email"
        id="email"
        placeholder="Ingresa tu email"
        className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}
      
      <label htmlFor="celular" className="font-semibold pb-2">Celular</label>
      <input
        value={values.celular}
        onChange={handleChange}
        onBlur={handleBlur}
        type="text"
        id="celular"
        placeholder="Ingresa tu celular"
        className={errors.celular && touched.celular ? "input-error" : ""}
      />
      {errors.celular && touched.celular && <p className="error">{errors.celular}</p>}
      
      <label htmlFor="mensaje" className="font-semibold pb-2">Mensaje</label>
      <textarea
        value={values.mensaje}
        onChange={handleChange}
        onBlur={handleBlur}
        id="mensaje"
        placeholder="Mensaje..."
        className={errors.mensaje && touched.mensaje ? "input-error" : ""}
      />
      {errors.mensaje && touched.mensaje && <p className="error">{errors.mensaje}</p>}
      
      <button disabled={isSubmitting} type="submit" className="bg-black text-sky-300 my-10 py-2 rounded-md font-semibold">Enviar</button>
      {formularioEnviado && <p className="enviado">Formulario enviado con éxito!</p>}
    </form>
  );
};

export default Formulario;
