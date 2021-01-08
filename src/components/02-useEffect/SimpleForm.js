import { useEffect, useState } from 'react';
import Message from './Message';

import './effects.css';

const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  });

  const { name, email } = formState;

  useEffect(() => {
  }, []);

  useEffect(() => {
  }, [email]);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    });
  }

  return (
    <>
      <h1>SimpleForm</h1>
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
      { name && <Message /> }
    </>
  )
}

export default SimpleForm;