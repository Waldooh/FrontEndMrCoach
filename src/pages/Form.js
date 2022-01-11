import React, { useState } from 'react';
import '../Styles/Form.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Formulario = () => {

  const [formSended, setFormSended] = useState(false)

  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          correo: ""
        }}
        validate={(values) => {
          let err = {}

          // Validación de nombre de usuario
          if(!values.nombre) {
            err.nombre = 'Por favor ingresa tu nombre'
          } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)) {
            err.nombre = 'El nombre no puede contener caracteres especiales'
          }

          // Validación de nombre de correo
          if(!values.correo) {
            err.correo = 'Por favor ingresa un correo electrónico'
          } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.correo)) {
            err.correo = 'El correo solo puede contener letras, numeros, guiones y puntos'
          }
          return err;
        }}
        onSubmit={(values, {resetForm}) => {
          resetForm();
          console.log("Formulario enviado");
          setFormSended(true);
          setTimeout(() => setFormSended(false), 5000);
        }}
      > 
        {({errors}) => (
          <Form className='formulario'>
            <div>
              <label htmlFor="nombre">Nombre</label>
              <Field 
                type={"text"} 
                id="nombre" 
                name="nombre" 
                placeholder="Nombre" 
              />
              <ErrorMessage name='nombre' component={() => (
                <div className='error'>{errors.nombre}</div>)} 
              />
            </div>

            <div>
              <label htmlFor="correo">Correo</label>
              <Field
                type={"text"} 
                id="correo" 
                name="correo" 
                placeholder="ejemplo@hotmail.com" 
              />
              <ErrorMessage name='correo' component={() => (
                <div className='error'>{errors.correo}</div>)} 
              />            
            </div>

            <div>
              <Field name="pais" as="select">
                <option value={"méxico"}> México </option>
                <option value={"españa"}> España </option>
                <option value={"argentina"}> Argentina </option>
                <option value={"colombia"}> Colombia </option>
                <option value={"usa"}> United States </option>
              </Field>
            </div>

            <div>
              <label>
                <Field type={"radio"} name="gender" value="Male" /> Male
              </label>
              <label>
                <Field type={"radio"} name="gender" value="Female" /> Female
              </label>
              <label>
                <Field type={"radio"} name="gender" value="Other" /> Other
              </label>
            </div>

            <div>
              <Field name="description" as="textarea" placeholder="Leave a description" />
            </div>
            
            <button type={"submit"}>Enviar</button>
            {formSended && <p className='succes'>Formulario enviado exitosamente!</p>}
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Formulario;
