import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import "../hojas-de-estilo/FormContacto.css";
import emailjs from '@emailjs/browser';

function FormContacto() {
  const sendEmail = (e) => {


    emailjs.sendForm('service_ju3h8rj', 'template_i5yai1v', e.target, '-im79ost_8J5QDKXf')
  };

  return (
    <div className="container">
      <Formik
        onSubmit={(values, { resetForm }) => {
          resetForm();
        }}
        initialValues={
          {
            user_name: "",
            user_email: "",
            message: ""
          }
        }
        validate={
          (values) => {
            let errores = {};

            if (!values.user_name) {
              errores.user_name = "porfavor ingrese su Nombre"
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.user_name)) {
              errores.user_name = "un user_name solo puede tener letras y espacios"
            }
            if (!values.user_email) {
              errores.user_email = "porfavor ingrese su email"
            } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.user_email)) {
              errores.user_email = "el email solo puede contener arrobas, letras, numeros, puntos, guiones y guion bajo"
            }
            if (!values.message) {
              errores.message = "el mensaje no puede estar vacio"
            }

            return errores;
          }}

      >
        {({ touched, errors, values, handleChange, handleBlur }) => (
          <Form className="row" onSubmit={sendEmail}>
            <div class="mb-3">
              <label for="user_name"
                class="form-label text-dark">Nombre Completo</label>
              <Field
                type="text"
                class="form-control"
                name="user_name"
                id="user_name"
                placeholder="Como te llamas?"
              />
              <ErrorMessage name="user_name" component={() => (<div className="error">{errors.user_name}</div>)} />
            </div>
            <div class="mb-3">
              <label for="user_email"
                class="form-label text-dark">Direccion de correo electronico</label>
              <Field
                type="email"
                class="form-control"
                id="user_email"
                name="user_email"
                placeholder="name@example.com"
              />
              <ErrorMessage name="user_email" component={() => (<div className="error">{errors.user_email}</div>)} />
            </div>
            <div class="mb-3">
              <label for="message" class="form-label text-dark ">Escribe tu mensaje</label>
              <Field as="textarea"
                class="form-control"
                name="message"
                id="message"
                rows="3"

              />
              <ErrorMessage name="message" component={() => (<div className="error">{errors.message}</div>)} />
            </div>
            <button
              type="submit"
              class="btn btn-secondary "
              id="btn">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default FormContacto;