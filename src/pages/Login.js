import React from 'react'
import '../Styles/Login.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Login = () => {
  return (
    <div className='first-container'>
      <div className='second-container'>
        <div className='from-group'>
          <laber>Usuario: </laber>
          <br />
          <input type={'text'} className='form-control' />
          <br />
          <laber>Contraseña: </laber>
          <br />
          <input type={'password'} className='form-control' />
          <br />
          <button className='btn btn-primary'>Iniciar Sesión</button>
        </div>
      </div>
    </div>
  )
}

export default Login
