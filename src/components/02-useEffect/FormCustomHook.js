import { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

import './effects.css';

const FormCustomHook = () => {

  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = formValues;

  useEffect(() => {
    console.log('Cambió el email');
  }, [email])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <h1>FormCustomHook</h1>
      <hr/>
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Nombre"
          autoComplete="off"
          value= { name }
          onChange={ handleInputChange }
        />
      </div>
      <div className="form-group mt-3">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Correo electrónico"
          autoComplete="off"
          value={ email }
          onChange={ handleInputChange }
        />
      </div>
      <div className="form-group mt-3">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Contraseña"
          autoComplete="off"
          value={ password }
          onChange={ handleInputChange }
        />
      </div>
      <button
        type="submit"
        className="btn btn-outline-dark mt-3"
      >Guardar</button>
    </form>
  )
}

export default FormCustomHook;